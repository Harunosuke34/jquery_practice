//js
// jquery_code.js

// ページが読み込まれた時の処理
$(document).ready(function () {

  // Q1-1　読み込み時に文字の色変化
  $("#q1").css("color", "green");

  // Q1-2 idq2をクリックしてボタンの色変更
  $("#q2").click(function () {
    $(this).css("background-color", "pink"); // 背景色をpinkに変更
  });

  // Q1-3 idQ3をクリックしてフェードアウト
  $("#q3").click(function () {
    $(this).fadeOut(3000); // フェードアウトする時間は3秒
  });


  // Q1-4 ボタンがクリックされた時の処理を設定、クリックしてボタンを大きくする
  $("#q4").on("click", function () {
    // クリックされたボタンに"large"というクラスを追加
    $(this).addClass("large");
  });


  // #q5 ボタンがクリックされたときのイベントを処理するためのコールバック関数を定義します。
  $("#q5").on("click", function () {

    // クリックされた要素 (#q5 ボタン) の直前に、テキスト "DOMの前" を追加します。
    $(this).before("DOMの前");

    // クリックされた要素 (#q5 ボタン) の内部に、テキスト "DOMの中の前" を追加します。
    $(this).prepend("DOMの中の前");

    // クリックされた要素 (#q5 ボタン) の内部に、テキスト "DOMの中の後" を追加します。
    $(this).append("DOMの中の後");

    // クリックされた要素 (#q5 ボタン) の直後に、テキスト "DOMの後" を追加します。
    $(this).after("DOMの後");
  });


  // Q1-6 idQ6クリックして移動
  $("#q6").click(function () {
    $(this).animate({ marginTop: "100px", marginLeft: "100px" }, 2000); // margin-top100pxとmargin-left100pxを指定し、2秒かけて動く
  });

  // Q1-7
  // Q1-8

  // Q1-9 idq9とliタグのindex番号を取得する処理
  $("#q9 li").click(function () {
    let index = $(this).index(); // idq9とliタグがクリックされた際にindex番号を取得
    alert(index); // 取得したindex番号をアラートで表示
  });

});


// Q1-10
