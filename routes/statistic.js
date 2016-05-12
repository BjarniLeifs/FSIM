var express = require('express');
var router = express.Router();
var statisticLib = require('../routes/lib/statistic');
/* As is in the 1 phase of the development of the arcitecture, we have no callbacks ATM. */
router.get('/einn', function(req, res, next) {

	var ble = "2";
  	return res.status(200).json(ble);
});


router.get('/indexloan', function(req, res, next) {
	/* Vars that needs to have sent.*/
	var Principal, Interest, Duration, CPI;

	/* Choosing this way to ensure that there is allways some data returned */
	
	if (!req.body.principal | !req.body.principal <= 0)
		Principal 	= 20000000;
	else
		Principal 	= req.body.principal;

	if (!req.body.interest | !req.body.interest <= 0)
		Interest 	= 0.0577
	else
		Interest 	= req.body.interest
	
	if (!req.body.duration | !req.body.duration <= 0)
		Duration 	= 480
	else
		Duration 	= req.body.duration
	
	if (!req.body.cpi | !req.body.cpi <= 0)
		CPI 		= 0.05;
	else
		CPI 		= req.body.cpi

	/* Calling into lib statistic.js for the data. */
	var objReturn = statisticLib.indexloan(Principal, Interest, Duration, CPI);
	
  	return res.status(200).json(objReturn);
});

router.get('/indexloanP', function(req, res, next) {
	/* Vars that needs to have sent.*/
	var Principal 	= 20800000;//req.body.principal,
	var Interest 	= 0.0577;//req.body.interest,
	var duration 	= 480;//req.body.duration,
	var CPI 		= 0.1;//req.body.cpi;

	var objReturn = statisticLib.indexloanP(Principal, Interest, duration, CPI);
	


  	return res.status(200).json(objReturn);
});
router.get('/indexloanDate', function(req, res, next) {
	/* Vars that needs to have sent.*/
	var Principal 	= 20800000;//req.body.principal,
	var Interest 	= 0.0577;//req.body.interest,
	var duration 	= 480;//req.body.duration,
	var CPI 		= 0.1;//req.body.cpi;

	var objReturn = statisticLib.indexloanDate(Principal, Interest, duration, CPI);
	

  	return res.status(200).json(objReturn);
});
router.get('/indexloanFinalResult', function(req, res, next) {
	/* Vars that needs to have sent.*/
	var Principal 	= 20800000;//req.body.principal,
	var Interest 	= 0.0577;//req.body.interest,
	var duration 	= 480;//req.body.duration,
	var CPI 		= 0.1;//req.body.cpi;

	var objReturn = statisticLib.indexloanFinalResult(Principal, Interest, duration, CPI);
	

  	return res.status(200).json(objReturn);
});


module.exports = router;

