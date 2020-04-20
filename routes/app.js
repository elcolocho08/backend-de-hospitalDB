var express = require('express');

var app = express();


app.get('/', (req, res, next) => {

    res.status(200).json({
        ok: true,
        mensaje: 'Hice otro cambio al estatus 403'
    });

});

module.exports = app;