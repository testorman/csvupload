var mongoose = require('mongoose');

var gemSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
    UserName: String,
	Moc: String,
	BitBerryID:String,
	Mog:String ,
	
	// twitter: {
	// 	type: String,
	// 	validate: {
	// 		validator: function(text) {
	// 			if (text !== null && text.length > 0)
	// 				return text.indexOf('https://twitter.com/') === 0;
				
	// 			return true;
	// 		},
	// 		message: 'Twitter handle must start with https://twitter.com/'
	// 	}
	// },
	created: { 
		type: Date,
		default: Date.now
	}
});

var Gem = mongoose.model('Gem', gemSchema);

module.exports = Gem;