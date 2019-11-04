'use strict';

const port = 3000;
const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log(`request made to: ${req.url}`);
  next();
});

app.use('/items/:vegetable', (req, res, next) => {
  console.log('req.params :', req.params);
  console.log('req.query :', req.query);
  const veg = req.params.vegetable;
  res.send(`This is the page for ${veg}`);
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});