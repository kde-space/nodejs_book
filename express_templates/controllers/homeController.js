'use strict';

exports.sendReqParam = (req, res) => {
  const veg = req.params.vegetable;
  res.send(`This is the page for ${veg}`);
};

exports.respondWithName = (req, res) => {
  const paramsName = req.params.myName;
  res.render('index', {
    name: paramsName
  });
};

exports.respondWithContact = (req, res) => {
  res.render('contact');
};