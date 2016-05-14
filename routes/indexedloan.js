var express = require('express');
var router = express.Router();
var indexLib = require('../routes/lib/indexloan');
/* As is in the 1 phase of the development of the arcitecture, we have no callbacks ATM. */
router.post('/einn', function(req, res, next) {
	console.log(req.body);
	var ble = "5";
  	return res.status(200).json(ble);
});

/* Here you get all the data for the loan */
router.post('/indexloan', function(req, res, next) {
	/* Vars that needs to have sent.*/
	console.log(req.body);
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


module.exports = router;

