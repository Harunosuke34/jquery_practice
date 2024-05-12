$(document).ready(function() {
  // ドキュメントが読み込まれたときの処理を定義
  
  $(".nav-item").click(function() {
    // .nav-item要素がクリックされたときの処理を定義
    
    var index = $(this).index();
    // クリックされた要素のインデックスを取得
    
    $(".description li").addClass("is-hidden").eq(index).removeClass("is-hidden");
    // .description li要素全体にis-hiddenクラスを追加し、その中からクリックされた要素のインデックスに対応する要素のみからis-hiddenクラスを削除
  });
});
