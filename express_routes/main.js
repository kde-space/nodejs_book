'use strict';

const port = 3000;
const express = require('express');
const homeController = require('./controllers/homeController');
const app = express();

app.use(express.urlencoded({
  extended: false
}));

app.use(express.json());

app.post('/', (req, res) => {
  console.log('req.body :', req.body);
  console.log('req.query :', req.query);
  res.send('POST success!');
});

app.post('/sign_up', homeController.userSignUpProcessor);

app.get('/items/:vegetable', homeController.sendReqParam);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});