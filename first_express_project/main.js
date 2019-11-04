'use strict';

const port = 3000;
const express = require('express');
const app = express();

// ルーティング設定
app.get('/', (req, res) => {
  console.log('req.params :', req.params);
  console.log('req.body :', req.body);
  console.log('req.url :', req.url);
  console.log('req.query :', req.query);
  res.send('Hello, Universe!');
}).listen(port, () => {
  console.log(`The express server is listening ${port} port...`);
});
