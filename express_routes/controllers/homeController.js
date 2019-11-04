'use strict';

exports.sendReqParam = (req, res) => {
  const veg = req.params.vegetable;
  res.send(`This is the page for ${veg}`);
};

exports.userSignUpProcessor = (req, res) => {
  const body = req.body;
  console.log('body :', body);
  res.send('Sign up success!');
};
