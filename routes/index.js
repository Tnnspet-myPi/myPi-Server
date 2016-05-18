var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/World', function(req, res, next) {
	res.render('inded', { title: 'Hello World' });
});

module.exports = router;
