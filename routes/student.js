var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/data', function(req, res, next) {
  console.log(req)
  res.json({name:"vadanti"})
  // res.render('index', { title: 'Express' });
});

module.exports = router;
