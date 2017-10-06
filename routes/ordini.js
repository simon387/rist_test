'use strict';

const express = require('express');
const router = express.Router();

/* GET ordini listing. */
router.get('/', (req, res, next) => {
	res.render('ordini', {
		title: 'Defrovils', 
		toggle_navigation: 'Toggle navigation',
		menu: 'Menu',
		new_order: 'Nuovo Ordine',
		title_home: 'Defrovils',
		subtitle_home: 'Express Food Industries',
		text_home: 'Welcome to the future, RFID food web technology',
		add_product: 'Aggiungi prodotto',
		category: 'Categoria',
		product: 'Prodotto',
	});
});

module.exports = router;
