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
		consumer_key:         'GJuIZGB3vgUO4ARU44N8rLBsb',
		consumer_secret:      'RBiPbwyBSx4WhhnNtyCZvRX31r9jLnGiGcqzmXkclDh81Kris0',
		access_token:         '90852060-LFiIvufx6T5xDuYIH13hwEGaICwvkr15Dky2km2PC',
		access_token_secret:  'jgcZTGavy0EJYZmCEJSKlgPiTqwSmM3xDTNxAbNlSzoB0',
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