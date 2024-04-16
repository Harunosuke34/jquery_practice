//js
// jquery_code.js

// ページが読み込まれた時の処理
$(document).ready(function() {

  // Q1-3 クリックしてフェードアウト
  $("#q3").click(function() {
    $(this).fadeOut(3000); // フェードアウトする時間は3秒
  });

  // Q1-6 クリックして移動
  $("#q6").click(function() {
    $(this).animate({ marginTop: "100px", marginLeft: "100px" }, 2000); // margin-topとmargin-leftを指定し、2秒かけて動く
  });

  // Q1-9 対象の要素のindex番号を取得する処理
  $("#q9 li").click(function() {
    var index = $(this).index(); // クリックされた要素のindex番号を取得
    alert("Index: " + index); // 取得したindex番号をアラートで表示
  });

});
