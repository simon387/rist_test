'use strict';

const mongoose = require('mongoose')
, Schema = mongoose.Schema;

var productCategorySchema = new Schema({
	title: String//,
	//id: String
});

module.exports = mongoose.model('productCategory', productCategorySchema);
