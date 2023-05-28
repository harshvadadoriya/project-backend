const mongoose = require('mongoose');

const productschema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	discountedPrice: {
		type: Number,
		required: true,
	},
	originalPrice: {
		type: Number,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	quantity: {
		type: Number,
		required: true,
	},
	gender: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	recordDate: {
		type: Date,
		required: true,
		default: Date.now,
	},
});

module.exports = mongoose.model('Product', productschema);
