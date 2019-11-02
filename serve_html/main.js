'use-strict';
const http = require('http');
const httpStatus = require('http-status-codes');
const fs = require('fs');
const port = 3000;

const getViewUrl = url => `views${url}.html`;

http.createServer((req, res) => {
  const viewUrl = getViewUrl(req.url);
  fs.readFile(viewUrl, (error, data) => {
    if (error) {
      res.writeHead(httpStatus.NOT_FOUND);
      res.write('<h1>FILE NOT FOUND</h1>');
    } else {
      res.writeHead(httpStatus.OK, {
        'Content-Type': 'text/html'
      });
      res.write(data);
    }
    res.end();
  });
}).listen(port);

console.log(`port: ${port} is listening...`);