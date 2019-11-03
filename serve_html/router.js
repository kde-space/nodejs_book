'use strict';

const httpStatus = require('http-status-codes');
const contentType = 'Content-Type';
const htmlContentType = {
  [contentType]: 'text/html'
};
const plainTextContentType = {
  [contentType]: 'text/plain'
};
const cssContentType = {
  [contentType]: 'text/css'
};
const pngContentType = {
  [contentType]: 'image/png'
};

const routes = {
  GET: {
    '/info': (req, res) => {
      res.writeHead(httpStatus.OK, plainTextContentType);
      res.write('Welcome to the Info Page!');
      res.end();
    }
  },
  POST: {}
};

module.exports = {
  htmlContentType,
  plainTextContentType,
  cssContentType,
  pngContentType,
  handle(req, res) {
    try {
      if (routes[req.method][req.url]) {
        routes[req.method][req.url](req, res);
      } else {
        res.writeHead(httpStatus.NOT_FOUND, htmlContentType);
        res.write('<h1>No such file exists</h1>');
      }
    } catch (error) {
      console.log('error: ' + error);
    }
  },
  get(url, action) {
    routes.GET[url] = action;
  },
  post(url, action) {
    routes.POST[url] = action;
  }
};
