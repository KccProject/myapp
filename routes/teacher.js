var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/data', function(req, res, next) {
  console.log(req)
  res.json({name:"vadanta"})
  // res.render('index', { title: 'Express' });
});

router.get('/:da-:ta-:ch', function(req, res, next) {
    console.log(req.params )
    res.json({name:req.params.da+","+req.params.ch +" and "+req.params.ta+" are bother and sister"})
    // res.render('index', { title: 'Express' });
  });

router.get('/:da-:ta', function(req, res, next) {
    console.log(req.params.da)
    res.json({name:req.params.da+" and "+req.params.ta+" are bother and sister"})
    // res.render('index', { title: 'Express' });
  });

router.get('/:da', function(req, res, next) {
    console.log(req.params.da)
    // res.json({name:req.params.da})
    res.render('teacher', { title: req.params.da});
  });




module.exports = router;
