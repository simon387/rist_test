'use strict';

const product = require ('../models/product');

exports.list = function(req, res) {
	product.find(function(err, products) {
		res.json(products);
	})
}
/*
exports.create = function(req, res) {
	 console.log('salvo su db')
	 new product({title: "Spaghetti"}).save();
	 res.send();
}
*/