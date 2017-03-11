var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var Sequelize = require('sequelize');
var models = require('./server/models/index');

var Twit = require('twit');

app.set('port', (process.env.PORT));
app.use(express.static(__dirname + '/dist'));
app.engine('html', require('ejs').renderFile);

// Sanity of DB connection check

var sequelize = new Sequelize(process.env.DATABASE_URL);
sequelize
	.authenticate()
	.then(function() {
		console.log('Connected to DB');
	})
	.catch(function (err) {
		console.log('Unable to connect to the database:', err);
	});

app.get('/', function(req, res){
	res.render('index.html');
});

app.get('/twits', function(req, res) {
	models.Twit.findAll({}).then(function(tweets) {
		res.json(tweets);
	}).catch(function(err){
		res.json({error: err});
	});
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

	//var NYC = [ '40.917577', '40.477399', '-73.700272', '-74.259090' ];
	var NYC = ['-74,40','-73,41'];
	var stream = T.stream('statuses/filter', { locations: NYC });

	//var stream = T.stream('statuses/filter', { track: '#POTUS' });
	//var stream = T.stream('statuses/sample');
	// On each tweet, emit a tweet event to the socket.

	stream.on('message', function (msg) {
		//console.info(msg);
	});

	stream.on('tweet', function (tweet) {
		//console.info(tweet.text);

		/*models.Twit.create({
			//tweetId: tweet.id,
			text: tweet.text,
			media: tweet.entities
		}).then(function(tweet) {
			//console.log('Tweet saved to DB');
		});*/

		io.emit('tweet', tweet);
	});

	stream.on('limit', function (msg) {
		console.info(msg);
		io.emit('limit', msg);
	});

	stream.on('error', function (msg) {
		console.log(msg);
		io.emit('error', msg);
	});

	//On disconnect, destroy the stream.
	socket.on('disconnect', function(){
		console.log('user disconnected');
	});
});

http.listen(process.env.PORT || 5000, function(){
	console.log('listening on *:5000');
});