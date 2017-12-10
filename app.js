'use strict';

var express = require('express'),
     colors = require('colors');

var app = express();
app.use('/', express.static('dist'));

var port = process.env.PORT || '3000';
app.listen(port, function(){
  console.log(('The server is running on port ' + port).green);
});
