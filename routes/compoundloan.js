var express = require('express');
var router = express.Router();

var compoundLib = require('../routes/lib/compoundloan');
/* GET users listing. */
router.get('/r', function(req, res, next) {
	var retObj = compoundLib.compoundLoan();

  return res.status(200).json(retObj);
});

module.exports = router;
