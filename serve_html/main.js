'use-strict';
const http = require('http');
const httpStatus = require('http-status-codes');
const fs = require('fs');
const router = require('./router');
const port = 3000;

const customReadFile = (file, res) => {
  fs.readFile(`./${file}`, (error, data) => {
    if (error) {
      console.log('Error reading file...');
    } else {
      res.write(data);
    }
    res.end();
  });
};

router.get('/', (req, res) => {
  res.writeHead(httpStatus.OK, router.plainTextContentType);
  res.end('INDEX');
});

router.get('/index.html', (req, res) => {
  res.writeHead(httpStatus.OK, router.htmlContentType);
  customReadFile('views/index.html', res);
});

router.get('/kde.png', (req, res) => {
  res.writeHead(httpStatus.OK, router.pngContentType);
  customReadFile('public/images/kde.png', res);
});

router.get('/style.css', (req, res) => {
  res.writeHead(httpStatus.OK, router.cssContentType);
  customReadFile('public/css/style.css', res);
});

router.post('/', (req, res) => {
  res.writeHead(httpStatus.OK, router.plainTextContentType);
  res.end('POSTED');
});

http.createServer(router.handle).listen(port);

console.log(`port: ${port} is listening...`);

