var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', message: 'Jan' });
});

router.get('/world', function(req, res, next) {
  res.render('index', { title: 'Hello World', message: 'Jan' });
});

module.exports = router;
