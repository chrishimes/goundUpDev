'use strict';

//Require items to start the process
var http = require('http');
var path = require('path');
var url = require("url");
var express = require('express');

//mongo connection setup
var databaseUrl =  "mongodb://localhost:27017/MLSecation";
var collections = ["tests","modules","users","clients","questions","messages","rewards","MLSData"];
var mongojs=require("mongojs");
// old version var db = mongojs.connection(databaseUrl, collections);
var db = mongojs(databaseUrl, collections) //new version
var ObjectId = mongojs.ObjectId;
var fs=require('fs') ;
var crypto = require('crypto');

//this is the incoming router request which send everything to the client folder 
// needed to install npm install body-parser --save for this work
var router = express();
var server = http.createServer(router);
router.use(express.bodyParser());
router.use(express.static(path.resolve(__dirname, 'client')));
// do know yet router.use( express.cookieParser() );
// do know yet router.use(express.session({secret: '1234567890QWERTY'}));