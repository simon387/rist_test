'use strict';

const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

/*
 * pages and endpoints
 */
const index = require('./routes/index');//var users = require('./routes/users');
const ordini = require('./routes/ordini');

const productCategory = require('./endpoints/productCategory');
const product = require('./endpoints/product');

/*
 * DB setup
 */
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/prova');

/*
 * express engine setup
 */
const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));// uncomment after placing your favicon in /public
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use("/vendor", express.static(__dirname + "/vendor"));

app.use('/', index);//app.use('/users', users);
app.use('/ordini', ordini);
//REST
app.use('/productCategory/', productCategory);
app.use('/product/', product);

/*
 * catch 404 and forward to error handler
 */
app.use((req, res, next) => {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

/*
 * error handler
 */
app.use((err, req, res, next) => {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};
	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
