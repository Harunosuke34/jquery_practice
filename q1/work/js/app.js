// ページが読み込まれた時の処理
$(document).ready(function() {

  // Q1-1　読み込み時に文字の色変化
  $("#q1").css("color", "green");

  // Q1-2 idq2をクリックしてボタンの色変更
  $("#q2").click(function() {
    $(this).css("background-color", "pink"); // 背景色をpinkに変更
  });

  // Q1-3 idQ3をクリックしてフェードアウト
  $("#q3").click(function() {
    $(this).fadeOut(3000); // フェードアウトする時間は3秒
  });


  // Q1-4 ボタンがクリックされた時の処理を設定、クリックしてボタンを大きくする
  $("#q4").on("click", function() {
    // クリックされたボタンに"large"というクラスを追加
    $(this).addClass("large");
  });

  // Q1-5 ボタンがクリックされたときの処理を設定、DOMの挿入
  $("#q5").on("click", function() {
    // テキストを挿入
    $(this).before("DOMの前");
    $(this).prepend("DOMの中の前");
    $(this).append("DOMの中の後");
    $(this).after("DOMの後");
  });

  // Q1-6 idQ6クリックして移動
  $("#q6").click(function() {
    $(this).animate({ marginTop: "100px", marginLeft: "100px" }, 2000); // margin-top100pxとmargin-left100pxを指定し、2秒かけて動く
  });


// Q1-7 ボタンがクリックされたときのイベントを処理するためのコールバック関数を定義
$("#q7").on("click", function () {
  // コンソールにthis（この場合 id=q7の要素）を出力する
  console.log(this);
});


  //Q1-8
// Q1-8 ホバー時にサイズ変更
$("#q8").hover(
  function() {
    // マウスが要素上に乗ったとき、"large"クラスを追加
    $(this).addClass("large");
  },
  function() {
    // マウスが要素から離れたとき、"large"クラスを削除
    $(this).removeClass("large");
  }
);



  // Q1-9 idq9とliタグのindex番号を取得する処理
  $("#q9 li").click(function() {
    let index = $(this).index(); // idq9とliタグがクリックされた際にindex番号を取得
    alert(index); // 取得したindex番号をアラートで表示
  });


  //Q1-10
  // #q10の下にあるli要素がクリックされたときの処理を設定
$("#q10 li").on("click", function() {
  // クリックされたli要素のインデックス番号を取得して変数aに代入
  let clickedIndex = $(this).index();
  // #q11の下にあるli要素の中から、インデックス番号が変数aと一致する要素を選択し、コンソールに出力
  let correspondingLi = $("#q11 li").eq(clickedIndex);
  console.log(correspondingLi);
  // #q11の下にあるli要素の中から、インデックス番号が変数aと一致する要素に"large-text"クラスを追加
  correspondingLi.addClass("large-text");
})

});
