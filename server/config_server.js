var express = require('express');
var mongoose = require('mongoose');
var app = express();

var GitUser = require('./Schemas/GitUsers');
var Employer = require('./Schemas/Employers');

//force redeploy
var temp = 1;
var test = temp + 0;

//var mongoURI = process.env.MONGO || 'mongodb://localhost/gitInsights';
var mongoURI = MONGOLAB_URI || 'mongodb://localhost/gitInsights';
mongoose.connect(mongoURI);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open',function(callback){
  console.log("MONGODB CONNECTION OPEN");
});

require('./middleware.js')(app,express);

module.exports = app;