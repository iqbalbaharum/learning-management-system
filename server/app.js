import createError from 'http-errors'
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import session from 'express-session'
import bodyParser from 'body-parser'

import Models from "./models"

var app = express();

app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
require('./routes') (app)

// start database
Models.sequelize.sync();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
