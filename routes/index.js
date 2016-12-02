var express = require('express');
var router = express.Router();

//Get todos list
router.get('/', function (req, res, next) {
    res.render('index.html');
});

module.exports = router;

