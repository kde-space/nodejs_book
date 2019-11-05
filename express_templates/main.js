'use strict';

const express = require('express');
const app = express();
const homeController = require('./controllers/homeController');
const errorController = require('./controllers/errorController');
const layouts = require('express-ejs-layouts');

// configuration
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');

// middleware
app.use(express.static('public'));
app.use(layouts);

app.get('/', (req, res) => {
  res.send('Welcome!');
});
app.get('/contact', homeController.respondWithContact);
app.get('/name/:myName', homeController.respondWithName);
app.get('/items/:vegetable', homeController.sendReqParam);

// middleware エラーロギングはここで行う
app.use(errorController.logErrors);
app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);

app.listen(app.get('port'), () => {
  console.log(`Server running at http://localhost:${app.get('port')}`);
});