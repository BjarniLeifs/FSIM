var express = require('express');
var router = express.Router();
var indexLib = require('../routes/lib/indexloan');
/* As is in the 1 phase of the development of the arcitecture, we have no callbacks ATM. */


/* Here you get all the data for the loan */
router.post('/indexloan', function(req, res, next) {
	/* Vars that needs to have sent.*/
	var Principal, Interest, Duration, CPI;
	if (!req.body.principal | !req.body.interest | !req.body.duration | !req.body.cpi )
		return res.status(400).json({message: 'Please fill out all fields.'});

	/* Choosing this way to ensure that there is allways some data returned */
	
	Principal 	= req.body.principal;
	Interest 	= req.body.interest / 100;
	Duration 	= req.body.duration;
	CPI 		= req.body.cpi / 100;

/* Calling into lib statistic.js for the data. */
	var objReturn = indexLib.indexloan(Principal, Interest, Duration, CPI);
	
  	return res.status(200).json(objReturn);
});

/* Here you only get the P of the result of the Loan*/
router.post('/indexloanP', function(req, res, next) {
	var Principal, Interest, Duration, CPI;
	if (!req.body.principal | !req.body.interest | !req.body.duration | !req.body.cpi )
		return res.status(400).json({message: 'Please fill out all fields.'});

/* Choosing this way to ensure that there is allways some data returned */	

	Principal 	= req.body.principal;
	Interest 	= req.body.interest / 100;
	Duration 	= req.body.duration;
	CPI 		= req.body.cpi / 100;

/* Calling into lib statistic.js for the data. */
	var objReturn = indexLib.indexloanP(Principal, Interest, Duration, CPI);
	
  	return res.status(200).json(objReturn);
});

/* Here you get the date from next month until duration of the loan */
router.post('/indexloanDate', function(req, res, next) {
	var Principal, Interest, Duration, CPI;
	if (!req.body.principal | !req.body.interest | !req.body.duration | !req.body.cpi )
		return res.status(405).json({message: 'Please fill out all fields.'});

/* Choosing this way to ensure that there is allways some data returned */
	
	Principal 	= req.body.principal;
	Interest 	= req.body.interest / 100;
	Duration 	= req.body.duration;
	CPI 		= req.body.cpi / 100;

/* Calling into lib statistic.js for the data. */
	var objReturn = indexLib.indexloanDate(Principal, Interest, Duration, CPI);
	
  	return res.status(200).json(objReturn);
});


/* Here you get only the last calculation of the indexloan */
router.post('/indexloanFinalResult', function(req, res, next) {
	var Principal, Interest, Duration, CPI;
	if (!req.body.principal | !req.body.interest | !req.body.duration | !req.body.cpi )
		return res.status(400).json({message: 'Please fill out all fields.'});

/* Choosing this way to ensure that there is allways some data returned */
	
	Principal 	= req.body.principal;
	Interest 	= req.body.interest / 100;
	Duration 	= req.body.duration;
	CPI 		= req.body.cpi / 100;

/* Calling into lib statistic.js for the data. */
	var objReturn = indexLib.indexloanFinalResult(Principal, Interest, Duration, CPI);
	
  	return res.status(200).json(objReturn);
});


router.post('/indexloanPayDownPrincipal', function(req, res, next) {
	var Principal, Interest, Duration, CPI, payDownLoan;
	if (!req.body.principal | !req.body.interest | !req.body.duration | !req.body.cpi | !req.body.payDown)
		return res.status(400).json({message: 'Please fill out all fields.'});

/* Choosing this way to ensure that there is allways some data returned */

	Principal 	= req.body.principal;
	Interest 	= req.body.interest / 100;
	Duration 	= req.body.duration;
	CPI 		= req.body.cpi / 100;
	payDownLoan = req.body.payDown;

/* Calling into lib statistic.js for the data. */
	var objReturn = indexLib.indexloanPayDownPrincipal(Principal, Interest, Duration, CPI, payDownLoan);
	
  	return res.status(200).json(objReturn);
});
router.post('/indexloanPayDownPrincipalFinalResult', function(req, res, next) {
	var Principal, Interest, Duration, CPI, payDownLoan;
	if (!req.body.principal | !req.body.interest | !req.body.duration | !req.body.cpi | !req.body.payDown)
		return res.status(400).json({message: 'Please fill out all fields.'});

/* Choosing this way to ensure that there is allways some data returned */

	Principal 	= req.body.principal;
	Interest 	= req.body.interest / 100;
	Duration 	= req.body.duration;
	CPI 		= req.body.cpi / 100;
	payDownLoan = req.body.payDown;

/* Calling into lib statistic.js for the data. */
	var objReturn = indexLib.indexloanPayDownPrincipalFinalResult(Principal, Interest, Duration, CPI, payDownLoan);
	
  	return res.status(200).json(objReturn);
});




module.exports = router;

