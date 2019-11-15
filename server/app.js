var express = require('express'); 
var app = express(); 
var http = require('http'); 
var fs = require('fs');




//var MongoClient = require('mongodb').MongoClient;
//const uri = "mongodb+srv://LGBTDetroit:LGBTDetroit@cluster0-f4w2b.mongodb.net/test?retryWrites=true&w=majority"
//const client = new MongoClient(uri, {useNewUrlParser:true });

app.set('views','/home/ec2-user/NotQuiteCanada/server/views');
app.set('view engine', "ejs");
app.get('/', function (req,res) {
	res.render('main',{});
});
app.get('/main.ejs', function (req,res) {
	res.render('main',{});
});
app.get('/registration.ejs', function (req,res) {
	res.render('registration',{});
});

app.get('/events.ejs', function (req,res) {
	res.render('registration',{});
//	client.connect(err=>{
//	const collection = client.db("NotQuiteCanada").collection("Community Events");
//	collection.find({location:"Detroit, MI"}).toArray(function(err,result){
//	if (err) throw err;
	
//});
//	});
});

app.listen(3500, function() {
	console.log('Example app listening on port 3500!');
});

