const express = require('express');
const app = express();
const logger = require('morgan');
const connection = require('./data-access-layer/config');


//**middlewares**//
app.use(logger('dev'));



app.get('/',(req,res) => {
    connection.query('SELECT * FROM paciente',(err,data) => {
        if(err) throw err;
        console.log(data);
    });
    res.send("funciona");
});

module.exports = app;
