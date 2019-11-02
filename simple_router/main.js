'use strict';

const http = require('http');
const httpStatus = require('http-status-codes');
const port = 3000;

const router = {
  '/about': 'About us',
  '/hello': 'Hello',
  '/info': 'Info Page',
  '/contact': 'Contact us',
  '/error': 'Sorry'
};

const app = http.createServer((req, res) => {
  res.writeHead(req.url === '/error' ? httpStatus.NOT_FOUND : httpStatus.OK, {
    'Content-Type': 'text/html'
  });
  const title = router[req.url] ? router[req.url] : 'Welcome';
  res.write(`<h1>${title}</h1>`);
  if (req.url === '/hello') {
    res.write('<p>please send email <a href="mailto:sample@sample.com">here</a>.</p>');
  }
  res.end();
});

// アプリケーションサーバーにポートを監視させる
app.listen(port);

console.log(`サーバーが起動して ${port} ポートを監視中`);

