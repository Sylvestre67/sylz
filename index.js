var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var Twit = require('twit');

app.set('port', (process.env.PORT));

app.use(express.static(__dirname + '/dist'));
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res){
	res.render('index.html');
});


io.on('connection', function(socket){
	console.log('a user connected');

	// On new connection, start a Stream.
	var T = new Twit({
		consumer_key:         process.env.CONSUMER_KEY,
		consumer_secret:      process.env.CONSUMER_SECRET,
		access_token:         process.env.ACCESS_TOKEN,
		access_token_secret:  process.env.ACCESS_TOKEN_SECRET,
		timeout_ms:           60*1000,
	});
	var stream = T.stream('statuses/sample');

	// On each tweet, emit a tweet event to the socket.
	stream.on('tweet', function (tweet) {
		io.emit('tweet', tweet);
	});

	stream.on('limit', function (msg) {
		io.emit('limit', msg);
	});

	//On disconnect, destroy the stream.
	socket.on('disconnect', function(){
		console.log('user disconnected');
	});
});

http.listen(process.env.PORT || 5000, function(){
	console.log('listening on *:5000');
});