'use strict';

const express = require('express');
const router = express.Router();
const api = require('../controllers/api');


//app.get('/list', api.list);

/* in GET lista tutte le categorie */
router.get('/', function(req, res, next) {
	//res.setHeader('Content-Type', 'application/json');
   // res.send(JSON.stringify({ a: 1 }));
	//res.send(JSON.stringify(api.list));
	//console.log("KEK")
	//console.log(api.list(req, res));
	//res.json({"foo": "bar"});
	//res.json(api.list)
	//res.json(api.list(req, res));
	console.log("sonoqui")
	api.list(req, res);
});
/*
router.get('/', function(req, res, next) {
	console.log("sonoqau")
	api.post(req, res);
});*/

module.exports = router;
