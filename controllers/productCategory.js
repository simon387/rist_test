'use strict';

const productCategory = require ('../models/productCategory');

exports.list = function(req, res) {
	productCategory.find(function(err, productCategories) {
		res.json(productCategories);
	})
}

/**crea cat di test */
exports.create = function(req, res) {
	 console.log('salvo su db')
	 new productCategory({title: "titolo_di_test"}).save();
	 res.send();
}
