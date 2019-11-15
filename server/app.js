var express = require('express'); 
var app = express(); 
var http = require('http'); 
var fs = require('fs');
var MongoClient = require('mongodb').MongoClient;
const uri = mongodb+srv://LGBTDetroit:LGBTDetroit@cluster0-f4w2b.mongodb.net/test?retryWrites=true&w=majority
app.set('views','/home/ec2-user/not_quite_canada/views');
app.set('view engine', "ejs");
app.get('/', function (req,res) {
	res.render('index',{});
});

app.listen(5000, function() {
	console.log('Example app listening on port 5000!');
});

