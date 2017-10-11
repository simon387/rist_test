'use strict';

const mongoose = require('mongoose'),
	Schema = mongoose.Schema//,
	//ObjectId = Schema.ObjectId;

var productSchema = new Schema({
	title: String,
	productCategory: String
});

module.exports = mongoose.model('product', productSchema);
