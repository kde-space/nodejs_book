'use strict';

const http = require('http');
const httpStatus = require('http-status-codes');
const app = http.createServer();
const port = 3000;

const getJsonString = obj => JSON.stringify(obj, null, 2);

const writeEnd = (req, res) => {
  console.log(`Method : ${getJsonString(req.method)}`);
  console.log(`URL : ${getJsonString(req.url)}`);
  console.log(`Headers : ${getJsonString(req.headers)}`);

  res.writeHead(httpStatus.OK, {
    'Content-Type': 'text/html'
  });
  let responseMessage = '<h1>Hello</h1>';
  res.end(responseMessage);
}

app.on('request', (req, res) => {
  if (req.method === 'POST') {
    let body = [];
    req.on('data', bodyData => {
      console.log(bodyData);
      body.push(bodyData);
    });
    console.log(body);
    req.on('end', () => {
      body = Buffer.concat(body).toString();
      console.log(`Request Body Contents: ${body}`);
      writeEnd(req, res);  
    });
    return;
  }
  writeEnd(req, res);
});

app.listen(port);

console.log('サーバー起動しました。監視しているポートは' + port);