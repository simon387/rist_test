'use strict';

//window.jQuery = window.$// = require('jquery');

const localhost = 'http://localhost:3000/';

$(document).ready(function() {

	refreshComboByFetchAndSelector('productCategory', '#newOrderProductCategory', 'title');
	refreshComboByFetchAndSelector('product', '#newOrderProduct', 'title');

});


const refreshComboByFetchAndSelector = (query, selector, field, sel = '') => {
	fetch(localhost + query)
	.then(response => {
		return response.json();
	})
	.then(array => {
		document.querySelectorAll(selector).forEach(el => {
			el.innerHTML = '';
			array.map(item => {
				if (sel != '' && item == sel) {
					el.innerHTML += '<option value="' + item[field] + '" selected=true>' + item[field] + '</option>';
				} else {
					el.innerHTML += '<option value="' + item[field] + '">' + item[field] + '</option>';
				}
			});
		});
	});
}