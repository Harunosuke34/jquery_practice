$(document).ready(function() {
  // ドキュメントが読み込まれたときの処理を定義

  $(".select-box").on("change", function() {
    // .select-box要素が変更されたときの処理を定義

    let selectedValue = $(this).val();
    // 選択された値を取得

    let foodItems = $(".food-list li");
    // .food-list li要素を取得

    if (selectedValue === "all") {
      // 選択された値が "all" の場合、すべての食べ物を表示
      foodItems.show();
    } else {
      // それ以外の場合、選択されたカテゴリーに応じて食べ物の表示を制御
      $.each(foodItems, function(index, item) {
        let categoryType = $(item).data("category-type");
        // 食べ物のカテゴリータイプを取得

        if (selectedValue === categoryType) {
          // 選択されたカテゴリーと一致する場合、食べ物を表示
          $(item).show();
        } else {
          // それ以外の場合、食べ物を非表示
          $(item).hide();
        }
      });
    }
  });
});
