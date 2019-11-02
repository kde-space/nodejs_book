'use strict';

const http = require('http');
const httpStatus = require('http-status-codes');
const port = 3000;

const app = http.createServer((request, response) => {
  console.log('リクエストを受信しました！');
  response.writeHead(httpStatus.OK, {
    'Content-Type': 'text/html'
  });

  let responseMessage = '<h1>Hello, Universe!</h1>';
  response.write(responseMessage);
  response.end();
  console.log('レスポンスを送信しました！');
});

// アプリケーションサーバーにポートを監視させる
app.listen(port);

console.log(`サーバーが起動して ${port} ポートを監視中`);

