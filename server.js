//'use strict';

//Require items to start the process
var http = require('http');
var path = require('path');
var url = require("url");
var express = require('express');



/*
//*Newest requirements to correct the old parsing error
var express = require('express');
var favicon = require('serve-favicon');
var logger = require('morgan');
var methodOverride = require('method-override');
var session = require('express-session');
var bodyParser = require('body-parser');
var multer = require('multer');
var errorHandler = require('errorhandler');*/




//mongo connection setup
var databaseUrl =  "mongodb://localhost:27017/MLSecation";
var collections = ["tests","modules","users","clients","questions","messages","rewards","MLSData"];
var mongojs=require("mongojs");
// old version var db = mongojs.connection(databaseUrl, collections);
var db = mongojs(databaseUrl, collections); //new version
var ObjectId = mongojs.ObjectId;
var fs=require('fs') ;
var crypto = require('crypto');

/*//this is the incoming router request which send everything to the client folder
// needed to install npm install body-parser --save for this work
var router = express();
var server = http.createServer(router);
router.use(express.bodyParser());
router.use(express.static(path.resolve(__dirname, 'client')));
// do know yet router.use( express.cookieParser() );
// do know yet router.use(express.session({secret: '1234567890QWERTY'}));
*/


/*var app = express();
//var server = http.createServer(router);
app.set('port', process.env.PORT || 80, process.env.IP || "0.0.0.0", function(){
    var addr = server.address();
    console.log("server listening at", addr.address + ":" + addr.port)
});

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
// not sure what this is for app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(methodOverride());
app.use(session({ resave: true, saveUninitialized: true,
    secret: 'uwotm8' }));

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse multipart/form-data
app.use(multer());

app.use(express.static(path.join(__dirname, 'client')));

app.listen(app.get('port'), function(){
    console.log('Express server on port ' + app.get('port'));
});

/*server.listen(process.env.PORT || 80, process.env.IP || "0.0.0.0", function(){
    var addr = server.address();
    console.log("server listening at", addr.address + ":" + addr.port);  */

var router = express();
var server = http.createServer(router);
router.use(express.bodyParser());
router.use(express.static(path.resolve(__dirname, 'client')));
router.use( express.cookieParser() );
router.use(express.session({secret: '1234567890QWERTY'}));

var nodemailer = require("nodemailer");

server.listen(process.env.PORT || 80, process.env.IP || "0.0.0.0", function(){
    var addr = server.address();
    console.log("server listening at", addr.address + ":" + addr.port);
})