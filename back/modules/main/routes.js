var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  // res.render('/main/views/index');
  console.log('******** Render inicial');
  res.redirect('/carnes');
});

module.exports = router;
