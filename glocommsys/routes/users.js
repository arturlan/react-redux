var express = require('express');
var router = express.Router();
var presidents = require('../presidents.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('hitted');
  res.send(presidents)
});

module.exports = router;
