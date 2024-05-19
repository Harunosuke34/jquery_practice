$(function () {
  // 検索結果を処理する関数
  function processResults(data) {
    // 以前のメッセージを削除
    $(".message").remove();

    // データの最初のアイテムを取得
    let items = data[0].items;

    // アイテムが存在し、かつ、長さが0より大きい場合
    if (items && items.length > 0) {
      // 各検索結果アイテムをリストに追加
      $.each(items, function(index, item) {
        // タイトル、作者、出版社、リンクを取得（それぞれ存在しない場合は不明とする）
        let title = item.title ? item.title : "タイトル不明";
        let creator = item["dc:creator"] ? item["dc:creator"] : "作者不明";
        let publisher = item["dc:publisher"] ? item["dc:publisher"][0] : "出版社不明";
        let link = item.link["@id"];

        // 検索結果アイテムをリストに追加するHTMLを作成
        let listItem = `
          <li class="lists-item">
            <div class="list-inner">
              <p>タイトル：${title}</p>
              <p>作者：${creator}</p>
              <p>出版社：${publisher}</p>
              <a href="${link}" target="_blank">書籍情報</a>
            </div>
          </li>`;
        
        // 作成したリストアイテムをリストの先頭に追加
        $(".lists").prepend(listItem);
      });
    } else {
      // 検索結果が見つからない場合のメッセージを表示
      $(".lists").before('<div class="message">検索結果が見つかりませんでした。<br>別のキーワードで検索してください。</div>');
    }
  }

  // 初期化
  let page = 1; // ページ番号の初期化
  let lastSearchTerm = ""; // 最後に検索した用語の初期化

  // 検索ボタンのクリックイベント
  $(".search-btn").on("click", function () {
    // 検索入力フィールドの値を取得
    let searchTerm = $("#search-input").val();

    // 新しい検索の場合、ページ番号をリセットしリストをクリア
    if (searchTerm !== lastSearchTerm) {
      page = 1;
      $(".lists").empty();
      lastSearchTerm = searchTerm;
    } else {
      // 同じ検索の場合、ページ番号をインクリメント
      page++;
    }

    // Ajaxリクエストの設定
    $.ajax({
      url: "https://ci.nii.ac.jp/books/opensearch/search", // APIのURL
      type: "GET", // リクエストの種類
      data: { // リクエストのデータ
        title: searchTerm,
        format: "json",
        p: page,
        count: 20
      },
      success: function(response) {
        // API呼び出し成功時の処理
        processResults(response["@graph"]);
      },
      error: function(xhr, status, error) {
        // API呼び出し失敗時の処理
        $(".lists").empty(); // リストをクリア
        $(".message").remove(); // メッセージを削除

        // エラーステータスごとに適切なメッセージを表示
        if (xhr.status === 0) {
          $(".lists").before('<div class="message">正常に通信できませんでした。<br>インターネットの接続を確認してください。</div>');
        } else if (xhr.status === 400) {
          $(".lists").before('<div class="message">検索キーワードが有効ではありません。<br>1文字以上で検索してください。</div>');
        } else {
          $(".lists").before('<div class="message">予期せぬエラーが起きました。<br>再読み込みを行ってください。</div>');
        }
      }
    });
  });

  // リセットボタンのクリックイベント
  $(".reset-btn").on("click", function () {
    page = 1; // ページ番号をリセット
    lastSearchTerm = ""; // 最後に検索した用語をリセット
    $(".lists").empty(); // リストをクリア
    $(".message").remove(); // メッセージを削除
    $("#search-input").val(""); // 検索入力フィールドをクリア
  });
});
