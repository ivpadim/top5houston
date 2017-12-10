'use strict';
var express = require('express'),
     colors = require('colors');

//updates the database every 4s
require('./firebase.worker');

//middleware for angular app (run webpack)
var app = express();
app.use('/', express.static('dist'));

var port = process.env.PORT || '3000';
app.listen(port, function(){
  console.log(('The server is running on port ' + port).green);
});
