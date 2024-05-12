$(document).ready(function() {
  // ドキュメントが読み込まれたときの処理を定義
  
  $(".dropdwn li").hover(function() {
    // .dropdwn li要素にマウスが乗ったときの処理を定義
    
    $(this).children("ul").stop().slideDown();
    // マウスが乗った要素の直下のul要素をスライドダウン
    
  }, function() {
    // マウスが離れたときの処理を定義
    
    $(this).children("ul").stop().slideUp();
    // マウスが離れた要素の直下のul要素をスライドアップ
    
  });
});
