// ページの読み込みが完了したときに実行される処理
$(document).ready(function () {
  // モーダルを開くボタンがクリックされたときの処理
  $(".modal_open_button").click(function () {
      // クリックされたときにモーダルをフェードインさせる
      $(".modal_win").fadeIn();
  });
  
  // モーダルを閉じるボタンがクリックされたときの処理
  $(".modal_close_button").click(function () {
      // クリックされたときにモーダルをフェードアウトさせる
      $(".modal_win").fadeOut();
  });
});
