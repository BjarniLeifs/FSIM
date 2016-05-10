var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/einn', function(req, res, next) {

	var ble = "2";
  	return res.status(200).json(ble);
});


router.get('/indexloan', function(req, res, next) {
	var capital;
	var payInterest;
	var Principal = 20000000;//req.body.principal,
	var Interest = 0.04;//req.body.interest,
	var duration = 300;//req.body.duration,

	var D = ((30.0)/(360.0));
	var CPI = 0.1;//req.body.cpi;
	var inflation = Math.pow((1.0 + CPI ),(1.0/12.0)) - 1;
	var AF = [];
	var P = [];
	
	//var interest = [];
	var II = [];
	

	var Increase = 0;
	var total = 0;
	var it;
	var payment;
	var test = Math.pow(2,3);
	console.log(test);

	for (it = 0; it < duration; it++) {

		AF.push((1/(D*Interest) - 1/((D*Interest) * Math.pow(1+D*Interest,duration-it))));

		if (it == 0) {
			II.push(100 + 100 * inflation);
			P.push(Principal * II[0]/100);
			Increase = P[0] - Principal;
			
		} else {

			II.push(II[it-1] + II[it-1]*inflation);
			P.push((P[it-1] - capital) * II[it]/II[it-1]);

			Increase = ((P[it-1] - capital) * II[it]/II[it-1]) - (P[it-1] - capital);

		}


		payment  = P[it]/AF[it];

		payInterest = P[it] * Interest * D;
		console.log('pay : '+ payment+ ' Int : ' + payInterest);
		capital  = payment - payInterest;
		total += capital;
		
	}

console.log(total);

  	return res.status(200).json({messgae : 'yes'});
});




module.exports = router;

