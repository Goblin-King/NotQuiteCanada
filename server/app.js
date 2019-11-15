var express = require('express'); 
var app = express(); 
var http = require('http'); 
var fs = require('fs');
app.set('views','/home/ec2-user/not_quite_canada/views');
app.set('view engine', "ejs");
app.get('/', function (req,res) {
	res.render('index',{});
});

app.listen(5000, function() {
	console.log('Example app listening on port 5000!');
});

