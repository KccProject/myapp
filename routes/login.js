var express = require('express');
var router = express.Router();
// var modelLogin = require("../model/login")
var mysql = require('mysql');
const { getLoginPost } = require('../contoller/contoller');
const func = require('../model/login');

var con = mysql.createConnection({
  host: "192.168.14.1",
  user: "root",
  password: "1234",
  database: "app_db"
});



router.get('/', function (req, res, next) {
  console.log("Nitya");
  con.connect(function (err) {
    console.log("HARSH")
    if (err) console.log("err");
    console.log("Connected!");
  });
  // modelLogin.a(modelLogin.pandy.name)
  console.log("himani")
  console.log("SIR")
  console.log("BITTU")
  res.render('login')
});

router.get('/getLogin', function (req, res, next) {
  getLoginPost(req, res, next)    
  
  // res.send({"name":"himani"})
  //res.render('teacher')
  // res.json({ "Name": requ })
});
router.post('/getLogin', function (req, res, next) {
  getLoginPost(req, res, next)           
  // console.log(req.body)
  // res.send({"name":"himani"})
  //res.render('teacher')
  // var sql = "INSERT INTO `login` (`email`, `pass`) \
  //   VALUES ('"+ req.body.Ashu + "', '" + req.body.pass + "');"
  // console.log(sql)
  // con.connect()
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log(result);

  // });
  // var sql1 = "select * from `login`"
  // con.query(sql1, funcStion (err, result) {
  //   if (err) throw err;
  //   console.log(result);

  // });
  // var t = con.query(sql);
  // func.a("Utkrisht")
  // func.natti("Abishake")
  // a("Utkrrrisht")
  //  console.log("Harsh loves Chocklet")
  // res.json({ "Name": req.body })
});

router.all('/getPost', function (req, res, next) {
  console.log(req.body)
  if (req.body) {
    //do something
  } else {
    //do something else
  }
  // res.send({"name":"himani"})
  //res.render('teacher')
  console.log(req.body.pass)
  res.json({ "Name": req.body })
});

module.exports = router;
