'use strict';

const httpStatus = require('http-status-codes');

exports.logErrors = (error, req, res, next) => {
  console.error('This is Error.');
  console.error(error.stack);
  next(error);
};

// ステータスコード 404 でレスポンス
exports.respondNoResourceFound = (req, res) => {
  const errorCode = httpStatus.NOT_FOUND;
  res.status(errorCode);
  res.sendFile(`./public/${errorCode}.html`, {
    root: process.cwd()
  });
};

// すべてのエラーをキャッチし、ステータスコード 500 でレスポンス
exports.respondInternalError = (error, req, res, next) => {
  const errorCode = httpStatus.INTERNAL_SERVER_ERROR;
  console.log(`ERROR occurred: ${error.stack}`);
  res.status(errorCode);
  res.send(`${errorCode} | Sorry, our application is experiencing a problem!`);
};


