$(function() {
  $(".btn__submit").on("click", function() {
    // フォーム内の各入力フィールドに対してループ処理
    $("input[type='text'], input[type='password'], input[type='tel'], input[type='email'], select").each(function() {
      // 入力フィールドの値をログに出力
      console.log($(this).prev().text()); // ラベルを取得してログに出力
      console.log($(this).val()); // 入力値をログに出力
    });

    // チェックボックスの選択状態をログに出力
    $('[name="subscription"]:checked').each(function() {
      console.log($(this).val());
    });
  });
});
