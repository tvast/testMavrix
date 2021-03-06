// BASE SETUP
// =============================================================================
// TUTO : https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4
// call the packages we need

var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();
var cors       = require('cors')
var morgan     = require('morgan');

// configure app
app.use(morgan('dev')); // log requests to the console

app.use(cors());

// app.get('/api/bears', function(req, res, next){
//   res.json({msg: 'This is CORS-enabled for all origins!'});
// });

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port     = process.env.PORT || 8081; // set our port

var mongoose   = require('mongoose');
//mongoose.connect('mongodb://localhost:27017'); // connect to our database  mongodb://<user>:<pass>@waffle.modulusmongo.net:27017/yzY5qewy
mongoose.connect('mongodb://wolfsound:Francia2017!@ds153853.mlab.com:53853/wolfsound');
var Bear     = require('./app/models/bear');

// ROUTES FOR OUR API
// =============================================================================

// create our router
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
	// do logging
	console.log('Something is happening.');
	next();
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to our api!' });
});

// on routes that end in /bears
// ----------------------------------------------------
router.route('/bears')

	// create a bear (accessed at POST http://localhost:8080/bears)
	.post(function(req, res) {

		var bear = new Bear();		// create a new instance of the Bear model
		// bear.name = req.body.name;  // set the bears name (comes from the request)
		// bear.age = req.body.age;
		// bear.cover = req.body.cover;
		// bear.description = req.body.description;
		// bear.profilePic = req.body.profilePic;
		// bear.profilePic = req.body.profilePic;
		// bear.infos = req.body.infos;
		// bear.sounds = req.body.sounds;
		// bear.amis = req.body.amis;
		// bear.message = req.body.message;
		// bear.gigs = req.body.gigs;

		bear.firstName = req.body.firstName;
		bear.lastName = req.body.lastName;
		bear.email = req.body.email;
		bear.country = req.body.country;
		bear.updated = req.body.updated;


		bear.save(function(err) {
			if (err)
				res.send(err);

			res.json({ message: 'Bear created!' });
		});


	})

	// get all the bears (accessed at GET http://localhost:8080/api/bears)
	.get(function(req, res) {
		Bear.find(function(err, bears) {
			if (err)
				res.send(err);

			res.json(bears);
		});
	});

// on routes that end in /bears/:bear_id
// ----------------------------------------------------
router.route('/bears/:bear_id')

	// get the bear with that id
	.get(function(req, res) {
		Bear.findById(req.params.bear_id, function(err, bear) {
			if (err)
				res.send(err);
			res.json(bear);
		});
	})

	// update the bear with this id
	.put(function(req, res) {
		Bear.findById(req.params.bear_id, function(err, bear) {

			if (err)
				res.send(err);

			bear.name = req.body.name;

			bear.save(function(err) {
				if (err)
					res.send(err);

				res.json({ message: 'Bear updated!' });
			});

		});
	})

	// delete the bear with this id
	.delete(function(req, res) {
		Bear.remove({
			_id: req.params.bear_id
		}, function(err, bear) {
			if (err)
				res.send(err);

			res.json({ message: 'Successfully deleted' });
		});
	});


// REGISTER OUR ROUTES -------------------------------
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
