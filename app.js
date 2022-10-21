const express = require('express');
const app = express();
const logger = require('morgan');
const indexRoute = require('./router/index');


//**middlewares**//
app.use(logger('dev'));



app.get('/', indexRoute );

module.exports = app;
