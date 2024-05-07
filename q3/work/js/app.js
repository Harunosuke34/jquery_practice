$(document).ready(function() {
  // ドロワーボタンのクリックイベント
  $(".drawer_button, .drawer_bg").click(function() {
      // activeクラスの切り替え
      $(".drawer_button").toggleClass("active");
      // ドロワー背景のフェードトグル
      $(".drawer_bg").fadeToggle();
      // ナビゲーションメニューの開閉
      $("nav").toggleClass("open");
  });
});
