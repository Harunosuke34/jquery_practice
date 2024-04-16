//js
// jquery_code.js

// ページが読み込まれた時の処理
$(document).ready(function() {

  // Q1-3 idQ3をクリックしてフェードアウト
  $("#q3").click(function() {
    $(this).fadeOut(3000); // フェードアウトする時間は3秒
  });

  // Q1-6 idQ6クリックして移動
  $("#q6").click(function() {
    $(this).animate({ marginTop: "100px", marginLeft: "100px" }, 2000); // margin-top100pxとmargin-left100pxを指定し、2秒かけて動く
  });

  // Q1-9 idq9とliタグのindex番号を取得する処理
  $("#q9 li").click(function() {
    let index = $(this).index(); // idq9とliタグがクリックされた際にindex番号を取得
    alert("Index: " + index); // 取得したindex番号をアラートで表示
  });

});
