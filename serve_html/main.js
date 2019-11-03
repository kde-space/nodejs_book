'use-strict';
const http = require('http');
const httpStatus = require('http-status-codes');
const fs = require('fs');
const port = 3000;

http.createServer((req, res) => {
  const requestUrl = req.url;
  console.log('requestUrl: ', requestUrl);

  if (requestUrl.includes('.html')) {
    res.writeHead(httpStatus.OK, {
      'Content-Type': 'text/html'
    });
    customReadFile(`./views/${requestUrl}`, res);
  } else if (requestUrl.includes('.js')) {
    res.writeHead(httpStatus.OK, {
      'Content-Type': 'text/javascript'
    });
    customReadFile(`./public/js${requestUrl}`, res);
  } else if (requestUrl.includes('.css')) {
    res.writeHead(httpStatus.OK, {
      'Content-Type': 'text/css'
    });
    customReadFile(`./public/css${requestUrl}`, res);
  } else if (requestUrl.includes('.png')) {
    res.writeHead(httpStatus.OK, {
      'Content-Type': 'image/png'
    });
    customReadFile(`./public/images${requestUrl}`, res);
  } else {
    sendErrorMessage(res);
  }
}).listen(port);

console.log(`port: ${port} is listening...`);

function customReadFile(filePath, res) {
  if (!fs.existsSync(filePath)) {
    sendErrorMessage(res);
    return;
  }
  fs.readFile(filePath, (error, data) => {
    if (error) {
      console.log(error);
      sendErrorMessage(res);
      return;
    }
    res.write(data);
    res.end();
  })
}

function sendErrorMessage(res) {
  res.writeHead(httpStatus.NOT_FOUND, {
    'Content-Type': 'text/html'
  });
  res.write('<h1>FILE NOT FOUND</h1>')
  res.end();
}