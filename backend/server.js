var express = require("express");
var bodyparser = require("body-parser");
var mongoose = require("mongoose").MongoClient;
var app = express();

app.use(bodyparser.json());

app.use(function(req,res,next){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Content-type , Authorization");
	next();
});
app.post('/api/message',function(req,res){
	console.log(req.body);
	res.status(200);
	res.send({message : "Posted Successfully"});
});


var server = app.listen(5000,function(){
	console.log("Listeninf on ",server.address().port);
});