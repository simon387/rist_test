'use strict';

const express = require('express');
const router = express.Router();
const productCategory = require('../controllers/productCategory');

/* in GET lista tutte le categorie */
router.get('/', function(req, res, next) {
	productCategory.list(req, res);
});

/*
router.post('/', function(req, res, next) {
	productCategory.create(req, res);
});*/

module.exports = router;
