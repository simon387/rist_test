'use strict';

const express = require('express');
const router = express.Router();
const product = require('../controllers/product');

/* in GET lista tutti i prodotti */
router.get('/', function(req, res, next) {
	product.list(req, res);
});

/* commenta */
// router.post('/', function(req, res, next) {
// 	product.create(req, res);
// });

module.exports = router;
