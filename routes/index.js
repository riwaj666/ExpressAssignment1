var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tourism' });
});

/*GET Bandipur page */
router.get('/bandipur',function(req,res,next){
    res.render("bandipur", { title: 'Bandipur'});
});

/* GET Pokhara page */
router.get('/pokhara',function(req,res,next){
  res.render("pokhara", { title: 'Pokhara'});
});


module.exports = router;
