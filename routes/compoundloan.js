var express = require('express');
var router = express.Router();

var compoundLib = require('../routes/lib/compoundloan');
/* GET users listing. */
router.post('/compoundloan', function(req, res, next) {
	if (!req.body.duration | !req.body.principal | !req.body.interest)
		return res.status(400).json({message: 'Please fill out all fields.'});

	var retObj = compoundLib.compoundLoan(req.body.duration, req.body.principal, req.body.interest);

	return res.status(200).json(retObj);
});

router.post('/compoundLoanFinalResult', function(req, res, next) {
	if (!req.body.duration | !req.body.principal | !req.body.interest)
		return res.status(400).json({message: 'Please fill out all fields.'});

	var retObj = compoundLib.compoundLoanFinalResult(req.body.duration, req.body.principal, req.body.interest);

	return res.status(200).json(retObj);
});

module.exports = router;
