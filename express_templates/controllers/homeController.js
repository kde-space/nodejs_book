'use strict';

exports.sendReqParam = (req, res) => {
  const veg = req.params.vegetable;
  res.send(`This is the page for ${veg}`);
};

exports.respondWithName = (req, res) => {
  res.render('index', {
    name: req.params.myName
  });
};

exports.respondWithContact = (req, res) => {
  res.render('contact');
};