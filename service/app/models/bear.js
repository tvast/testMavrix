	var mongoose     = require('mongoose');
	var Schema       = mongoose.Schema;

	var BearSchema = new Schema({
		firstName : String,
		lastName : String,
		email: String,
		country: String,
		updated: { type: Date, default: Date.now },
	});

	module.exports = mongoose.model('Bear', BearSchema);
