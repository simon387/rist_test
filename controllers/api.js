'use strict';

const productCategory = require ('../models/productCategory');

exports.list = function(req, res) {
	productCategory.find(function(err, productCategories) {
		//res.send(productCategories);
		//res.send(productCategories);

		//console.log("err=", err);
		//console.log("productCategories=", productCategories);
		res.json(productCategories);

		//res.json({"kek":"asd"});
	});
	/*console.log("res")
	console.log(res)
	console.log("req");
	console.log(req)*/
	//res.send({"kek":"asd"});
}

/**crea cat di test */
exports.post = function(req, res) {
	 //new Thread({title: req.body.title, author: req.body.author}).save();
	 console.log('salvo su db')
	 new productCategory({title: "titolo_di_test"}).save();
	 res.send();
}









