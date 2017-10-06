const express = require('express');
const router = express.Router();
/* serve ad uan sega questo js */
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
