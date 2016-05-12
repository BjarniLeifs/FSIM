var exports = module.exports = {};

exports.indexloan = function (princ, inter, dur, comPi) {
	/* Vars that needs to have sent.*/
	var Principal 	= princ;//req.body.principal,
	var Interest 	= inter;//req.body.interest,
	var duration 	= dur;//req.body.duration,
	var CPI 		= comPi;//req.body.cpi;
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
	var dates 		= [];

	var returnObj   = [];

	/* var control */
	
	var total 		  = 0;
	var totalPayment  = 0;
	var totalInterest = 0;

	/* iterator initialation*/
	var it;

	/* Date */
	




	for (it = 0; it < duration; it++) {
		var CurrentDate = new Date();
		CurrentDate.setMonth(CurrentDate.getMonth() + (it+1));

		dates.push(CurrentDate);

		AF.push((1/(D*Interest) - 1/((D*Interest) * Math.pow(1+D*Interest,duration-it))));

		if (it == 0) {
			II.push(100 + 100 * inflation);
			P.push(Principal * II[0]/100);
			Increase.push(P[0] - Principal + Principal);
			
		} else {

			II.push(II[it-1] + II[it-1]*inflation);
			P.push((P[it-1] - capital[it-1]) * II[it]/II[it-1]);

			Increase.push((P[it-1] - capital[it-1]) * II[it]/II[it-1]) - (P[it-1] - capital[it-1]);

		}


		payment.push(P[it]/AF[it]);

		payInterest.push(P[it] * Interest * D);
		
		capital.push(payment[it] - payInterest[it]);
		
		total += capital[it];
		totalPayment  += payment[it];

		var object = {
			"id"			: it + 1,
			"date" 			: dates[it],
			"duration"		: duration - 1 - it,
			"p" 			: P[it],
			"af"			: AF[it],
			"payment"		: payment[it],
			"capital"		: capital[it],
			"payInterest" 	: payInterest[it],
			"ii" 			: II[it],
			"increase"		: Increase[it],
			"total"			: total,
			"totalPayment"	: totalPayment,
			"totalInterest" : totalInterest,
			"inflation"		: inflation,
			"principal"		: Principal,
			"interest"		: Interest,
			"cpi"			: CPI,
			"d"				: D 

		}
		returnObj.push(object);
		
	}
	totalInterest = totalPayment - total;



  	return returnObj;

};

exports.indexloanDate = function (princ, inter, dur, comPi) {
	/* Vars that needs to have sent.*/
	var Principal 	= princ;//req.body.principal,
	var Interest 	= inter;//req.body.interest,
	var duration 	= dur;//req.body.duration,
	var CPI 		= comPi;//req.body.cpi;
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
	var dates 		= [];

	var returnObj   = [];

	/* var control */
	
	var total 		  = 0;
	var totalPayment  = 0;
	var totalInterest = 0;

	/* iterator initialation*/
	var it;

	/* Date */
	




	for (it = 0; it < duration; it++) {
		var CurrentDate = new Date();
		CurrentDate.setMonth(CurrentDate.getMonth() + (it+1));

		dates.push(""+CurrentDate+"");

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
		totalPayment  += payment[it];

		var object = {
			"id"			: it + 1,
			"date" 			: dates[it],
			"duration"		: duration - 1 - it,
			"p" 			: P[it],
			"af"			: AF[it],
			"payment"		: payment[it],
			"capital"		: capital[it],
			"payInterest" 	: payInterest[it],
			"ii" 			: II[it],
			"increase"		: Increase[it],
			"total"			: total,
			"totalPayment"	: totalPayment,
			"totalInterest" : totalInterest,
			"inflation"		: inflation,
			"principal"		: Principal,
			"interest"		: Interest,
			"cpi"			: CPI,
			"d"				: D 

		}
		returnObj.push(object);
		
	}
	totalInterest = totalPayment - total;



  	return dates;

};

exports.indexloanP = function (princ, inter, dur, comPi) {
	/* Vars that needs to have sent.*/
	var Principal 	= princ;//req.body.principal,
	var Interest 	= inter;//req.body.interest,
	var duration 	= dur;//req.body.duration,
	var CPI 		= comPi;//req.body.cpi;
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
	var dates 		= [];

	var returnObj   = [];

	/* var control */
	
	var total 		  = 0;
	var totalPayment  = 0;
	var totalInterest = 0;

	/* iterator initialation*/
	var it;

	/* Date */
	




	for (it = 0; it < duration; it++) {
		var CurrentDate = new Date();
		CurrentDate.setMonth(CurrentDate.getMonth() + (it+1));

		dates.push(CurrentDate);

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
		totalPayment  += payment[it];

		var object = {
			"id"			: it + 1,
			"date" 			: dates[it],
			"duration"		: duration - 1 - it,
			"p" 			: P[it],
			"af"			: AF[it],
			"payment"		: payment[it],
			"capital"		: capital[it],
			"payInterest" 	: payInterest[it],
			"ii" 			: II[it],
			"increase"		: Increase[it],
			"total"			: total,
			"totalPayment"	: totalPayment,
			"totalInterest" : totalInterest,
			"inflation"		: inflation,
			"principal"		: Principal,
			"interest"		: Interest,
			"cpi"			: CPI,
			"d"				: D 

		}
		returnObj.push(object);
		
	}
	totalInterest = totalPayment - total;



  	return P;

};





/*

	var objReturn = {
  		AF 				: {
  							Info  : "The Annuity factor",
  							Value : AF
  						},
		P 				: {
  							Info  : "The adjusted principal, used for calculation of interest ",
  							Value : P
  						},			
		payment 		: {
  							Info  : "The payment of the laon",
  							Value : payment
  						},
		capital 		: {
  							Info  : "The captial, with inflation",
  							Value : capital
  						},
		payInterest 	: {
  							Info  : "Interest actually payed",
  							Value : payInterest
  						},
		II 				: {
  							Info  : "Calculation variable",
  							Value : II
  						},
		Increase 		: {
  							Info  : "Increase in capital",
  							Value : Increase
  						},
		total 			: {
  							Info  : "The total capital of the loan",
  							Value : total
  						},
		totalPayment 	: {
  							Info  : "The total payment over the loan period",
  							Value : totalPayment
  						},
		totalInterest	: {
  							Info  : "The total interest over the loan period",
  							Value : totalInterest
  						},
		inflation 		: {
  							Info  : "The inflation over the loan period",
  							Value : inflation
  						},
		Principal 		: {
  							Info  : "The principal of the loan ",
  							Value : Principal
  						},
		Interest 		: {
  							Info  : "The interest rate of the loan",
  							Value : Interest
  						},
		duration 		: {
  							Info  : "The duration of the loan",
  							Value : duration
  						},
		CPI 			: {
  							Info  : "The compound interest",
  							Value : CPI
  						},
		D 				: {
  							Info  : "The base interest rate",
  							Value : D
  						},
  	 	dates 			: {
  	 						Info  : "The date object",
  	 						Value : dates 
  	 					}
	};



*/