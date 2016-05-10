var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/einn', function(req, res, next) {

	var ble = "2";
  	return res.status(200).json(ble);
});


router.get('/indexloan', function(req, res, next) {
	/* Vars that needs to have sent.*/
	var Principal 	= 20000000;//req.body.principal,
	var Interest 	= 0.055;//req.body.interest,
	var duration 	= 480;//req.body.duration,
	var CPI 		= 0.1;//req.body.cpi;
	var D = ((30.0)/(360.0));
	var inflation = Math.pow((1.0 + CPI ),(1.0/12.0)) - 1;

	/* Array to return later, keep track of things */
	var AF 			= [];
	var P 			= [];
	var payment 	= [];
	var capital 	= [];
	var payInterest = [];
	var II 			= [];
	var Increase 	= [];
	/* var control */
	
	var total 		= 0;
	/* iterator initialation*/
	var it;


	for (it = 0; it < duration; it++) {

		AF.push((1/(D*Interest) - 1/((D*Interest) * Math.pow(1+D*Interest,duration-it))));

		if (it == 0) {
			II.push(100 + 100 * inflation);
			P.push(Principal * II[0]/100);
			Increase.push(P[0] - Principal);
			
		} else {

			II.push(II[it-1] + II[it-1]*inflation);
			P.push((P[it-1] - capital[it-1]) * II[it]/II[it-1]);

			Increase.push((P[it-1] - capital[it-1]) * II[it]/II[it-1]) - (P[it-1] - capital[it-1]);

		}


		payment.push(P[it]/AF[it]);

		payInterest.push(P[it] * Interest * D);
		
		capital.push(payment[it] - payInterest[it]);
		
		total += capital[it];
		
		
	}
	var objReturn = {
  		AF 			: AF,
		P 			: P,			
		payment 	: payment,
		capital 	: capital,
		payInterest : payInterest,
		II 			: II,
		Increase 	: Increase,
		total 		: total
	};


  	return res.status(200).json(objReturn);
});




module.exports = router;

