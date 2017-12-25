var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var fetch = require('node-fetch');
var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.set('view engine','ejs');
//app.set('views',path.join(__dirname,'views'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
//app.locals.name = "";
app.get('/', function(req,res){
res.send('Hello World - Rahul');    
	});
app.get('/setcookie',function(req, res){
	res.cookie('firstname','Rahul');
	res.cookie('age','22');
    res.send('Cookie is set');
})
app.get('/getcookies', function(req,res){
	res.send(req.cookies);
})
app.get('/robots.txt', function(req,res){
	res.status(404).send('Request denied');
})
app.get('/html', function(req,res){
	res.render('index');
})
app.get('/input', urlencodedParser, function(req,res){
	res.render('posting', {qs: req.query});
})
app.post('/input', urlencodedParser, function(req,res){
res.render('output',{data: req.body});
})

app.listen(3000,function(){
	console.log('Server started in Port 3000...');
})
