var express = require('express');
var router = express.Router();
var statisticLib = require('../routes/lib/statistic');
/* GET home page. */
router.get('/einn', function(req, res, next) {

	var ble = "2";
  	return res.status(200).json(ble);
});


router.get('/indexloan', function(req, res, next) {
	/* Vars that needs to have sent.*/
	var Principal 	= 20800000;//req.body.principal,
	var Interest 	= 0.0577;//req.body.interest,
	var duration 	= 480;//req.body.duration,
	var CPI 		= 0.1;//req.body.cpi;

	var objReturn = statisticLib.indexloan(Principal, Interest, duration, CPI);
	


  	return res.status(200).json(objReturn);
});




module.exports = router;

