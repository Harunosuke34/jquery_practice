// API
// const settings = {
//   "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
//   "method": "GET",
// }
// $.ajax(settings).done(function (response) {
//   const result = response['@graph'];
//   displayResult(result)
// }).fail(function (err) {
//   displayError(err)
// });

// 変数settingsに設定情報などを格納
const settings = {
  // 実行するURL。実行するURLのことをエンドポイントと言います。
  "url": `https://ci.nii.ac.jp/books/opensearch/search?
  title=${searchWord}&format=json&p=${pageCount}&count=20`,
  // サーバーに送るメソッド
  "method": "GET",
  }
  // Ajaxの実行
  //.doneが通信成功した時の処理、”response”が引数となっていて通信した結果を受け取ってい
  る
  $.ajax(settings).done(function (response) {
  //.failが通信に失敗した時の処理、”err”にサーバーから送られてきたエラー内容を受け取って
  いる。
  }).fail(function (err) {
  });
  