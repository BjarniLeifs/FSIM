var exports = module.exports = {};


/*    Information about indexedloan variables

  		AF 	          ->  Info  : "The Annuity factor",
		P 	          ->  Info  : "The adjusted principal, used for calculation of interest ",
		payment       ->  Info  : "The payment of the laon",
		capital       ->  Info  : "The captial, with inflation",
		payInterest   ->  Info  : "Interest actually payed",
		II 			  ->  Info  : "Calculation variable",
		Increase 	  ->  Info  : "Increase in capital",
		total 		  ->  Info  : "The total capital of the loan",
		totalPayment  ->  Info  : "The total payment over the loan period",
		totalInterest ->  Info  : "The total interest over the loan period",
		inflation 	  ->  Info  : "The inflation over the loan period",
		Principal 	  ->  Info  : "The principal of the loan ",
		Interest 	  ->  Info  : "The interest rate of the loan",
		duration 	  ->  Info  : "The duration of the loan",
		CPI 	      ->  Info  : "The compound interest",
		D 			  ->  Info  : "The base interest rate",
  	 	dates 		  ->  Info  : "The date object",
*/

/* All result of indexloan calculation */
exports.indexloan = function (princ, inter, dur, comPi) {
/* Vars that needs to have sent. */
	var Principal 		= princ;	//req.body.principal,
	var Interest 		= inter;	//req.body.interest,
	var duration 		= dur;		//req.body.duration,
	var CPI 			= comPi;	//req.body.cpi;
	var D 				= ((30.0)/(360.0));
	var inflation 		= Math.pow((1.0 + CPI ),(1.0/12.0)) - 1;

/* Array to return later, keep track of things */
	var AF 				= [];
	var P 				= [];
	var payment 		= [];
	var capital 		= [];
	var payInterest 	= [];
	var II 				= [];
	var Increase 		= [];
	var dates 			= [];

	var returnObj   	= [];

	var total 		  	= 0;
	var totalPayment  	= 0;
	var totalInterest 	= 0;

	for (var it = 0; it < duration; it++) {
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

			Increase.push(((P[it-1] - capital[it-1]) * II[it]/II[it-1]) - (P[it-1] - capital[it-1]));

		}


		payment.push(P[it]/AF[it]);

		payInterest.push(P[it] * Interest * D);
		
		capital.push(payment[it] - payInterest[it]);
		

		total 			+= capital[it];
		totalInterest 	+= payInterest[it];
		totalPayment  	+= total - totalInterest;


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
/* Dates for x duration */
exports.indexloanDate = function (duration) {

/* Array to return later, keep track of things */
	var dates 		= [];

	for (var it = 0; it < duration; it++) {
		var CurrentDate = new Date();
		CurrentDate.setMonth(CurrentDate.getMonth() + (it+1));
		dates.push(""+CurrentDate+"");		
	}
	
  	return dates;

};
/* P of the indexloan */
exports.indexloanP = function (princ, inter, dur, comPi) {
/* Vars that needs to have sent.*/
	var Principal 	= princ;	//req.body.principal,
	var Interest 	= inter;	//req.body.interest,
	var duration 	= dur;		//req.body.duration,
	var CPI 		= comPi;	//req.body.cpi;
	var D 			= ((30.0)/(360.0));
	var inflation 	= Math.pow((1.0 + CPI ),(1.0/12.0)) - 1;

/* Array to return later, keep track of things */
	var AF 			= [];
	var P 			= [];
	var payment 	= [];
	var capital 	= [];
	var payInterest = [];
	var II 			= [];
	var Increase 	= [];

	
	var total 		= 0;


	for (var it = 0; it < duration; it++) {
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

  	return P;
};
/* Last result of the loan returned. */
exports.indexloanFinalResult = function (princ, inter, dur, comPi) {
/* Vars that needs to have sent.*/
	var Principal 		= princ;	//req.body.principal,
	var Interest 		= inter;	//req.body.interest,
	var duration 		= dur;		//req.body.duration,
	var CPI 			= comPi;	//req.body.cpi;
	var D 				= ((30.0)/(360.0));
	var inflation 		= Math.pow((1.0 + CPI ),(1.0/12.0)) - 1;

/* Array to return later, keep track of things */
	var AF 				= [];
	var P 				= [];
	var payment 		= [];
	var capital 		= [];
	var payInterest 	= [];
	var II 				= [];
	var Increase 		= [];
	var dates 			= [];

	var returnObj   	= [];
	
	var total 		  	= 0;
	var totalPayment  	= 0;
	var totalInterest 	= 0;

	for (var it = 0; it < duration; it++) {
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
		
		total 			+= capital[it];
		totalPayment  	+= payment[it];
		totalInterest 	+= payInterest[it]
/* Only looking for the last data */
		if (it == (duration - 1)) {
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
				"totalPayment"	: total - totalInterest,
				"totalInterest" : totalPayment - total,
				"inflation"		: inflation,
				"principal"		: Principal,
				"interest"		: Interest,
				"cpi"			: CPI,
				"d"				: D 

			}
			returnObj.push(object);
		}
		
	}
	totalInterest = totalPayment - total;

  	return returnObj;
};



/* All result of indexloan calculation */
exports.indexloanPayDownPrincipal = function (princ, inter, dur, comPi, paydownPrinc) {
/* Vars that needs to have sent. */
	var paydownPrincipal = paydownPrinc;
	var Principal 		 = princ;	//req.body.principal,
	var Interest 		 = inter;	//req.body.interest,
	var duration 		 = dur;		//req.body.duration,
	var CPI 			 = comPi;	//req.body.cpi;
	
	var D 				 = ((30.0)/(360.0));
	var inflation 		 = Math.pow((1.0 + CPI ),(1.0/12.0)) - 1;

/* Array to return later, keep track of things */
	var AF 				= [];
	var P 				= [];
	var payment 		= [];
	var capital 		= [];
	var payInterest 	= [];
	var II 				= [];
	var Increase 		= [];
	var dates 			= [];
	var payDown 		= [];

	var returnObj   	= [];

	var total 		  	= 0;
	var totalPayment  	= 0;
	var totalInterest 	= 0;

	for (var it = 0; it < duration; it++) {
		var CurrentDate = new Date();
		CurrentDate.setMonth(CurrentDate.getMonth() + (it+1));

		dates.push(CurrentDate);

		AF.push((1/(D*Interest) - 1/((D*Interest) * Math.pow(1+D*Interest,duration-it))));

		if (it == 0) {
			II.push(100 + 100 * inflation);
			P.push((Principal - paydownPrincipal )* II[0]/100 );
			Increase.push(P[0] - Principal + Principal );
			
		} else {

			II.push(II[it-1] + II[it-1]*inflation);
			P.push(((P[it-1] - capital[it-1] - paydownPrincipal) * II[it]/II[it-1]));

			Increase.push(((P[it-1] - capital[it-1] - paydownPrincipal) * II[it]/II[it-1]) - (P[it-1] - capital[it-1] ));

		}


		payment.push(P[it]/AF[it]);

		payInterest.push(P[it] * Interest * D);
		
		capital.push(payment[it] - payInterest[it]);

		total 			+= capital[it];
		totalInterest 	+= payInterest[it];
		totalPayment  	+= total - totalInterest;


		var object = {
			"id"				: it + 1,
			"date" 				: dates[it],
			"duration"			: duration - 1 - it,
			"p" 				: P[it],
			"af"				: AF[it],
			"payment"			: payment[it],
			"principalPaydown" 	: paydownPrincipal,
			"capital"			: capital[it],
			"payInterest" 		: payInterest[it],
			"ii" 				: II[it],
			"increase"			: Increase[it],
			"total"				: total,
			"totalPayment"		: totalPayment,
			"totalInterest" 	: totalInterest,
			"inflation"			: inflation,
			"principal"			: Principal,
			"interest"			: Interest,
			"cpi"				: CPI,
			"d"					: D 

		}

		returnObj.push(object);
		
	}
	totalInterest = totalPayment - total;

  	return returnObj;

};

/* All result of indexloan calculation */
exports.indexloanPayDownPrincipalFinalResult = function (princ, inter, dur, comPi, paydownPrinc) {
/* Vars that needs to have sent. */
	var paydownPrincipal = paydownPrinc;
	var Principal 		 = princ;	//req.body.principal,
	var Interest 		 = inter;	//req.body.interest,
	var duration 		 = dur;		//req.body.duration,
	var CPI 			 = comPi;	//req.body.cpi;
	
	var D 				 = ((30.0)/(360.0));
	var inflation 		 = Math.pow((1.0 + CPI ),(1.0/12.0)) - 1;

/* Array to return later, keep track of things */
	var AF 				= [];
	var P 				= [];
	var payment 		= [];
	var capital 		= [];
	var payInterest 	= [];
	var II 				= [];
	var Increase 		= [];
	var dates 			= [];
	var payDown 		= [];

	var returnObj   	= [];

	var total 		  	= 0;
	var totalPayment  	= 0;
	var totalInterest 	= 0;

	for (var it = 0; it < duration; it++) {
		var CurrentDate = new Date();
		CurrentDate.setMonth(CurrentDate.getMonth() + (it+1));

		dates.push(CurrentDate);

		AF.push((1/(D*Interest) - 1/((D*Interest) * Math.pow(1+D*Interest,duration-it))));

		if (it == 0) {
			II.push(100 + 100 * inflation);
			P.push((Principal - paydownPrincipal )* II[0]/100 );
			Increase.push(P[0] - Principal + Principal );
			
		} else {

			II.push(II[it-1] + II[it-1]*inflation);
			P.push(((P[it-1] - capital[it-1] - paydownPrincipal) * II[it]/II[it-1]));

			Increase.push(((P[it-1] - capital[it-1] - paydownPrincipal) * II[it]/II[it-1]) - (P[it-1] - capital[it-1] ));

		}


		payment.push(P[it]/AF[it]);

		payInterest.push(P[it] * Interest * D);
		
		capital.push(payment[it] - payInterest[it]);

		total 			+= capital[it];
		totalInterest 	+= payInterest[it];
		totalPayment  	+= total - totalInterest;

		if (it == (duration - 1)) {
			var object = {
				"id"				: it + 1,
				"date" 				: dates[it],
				"duration"			: duration - 1 - it,
				"p" 				: P[it],
				"af"				: AF[it],
				"payment"			: payment[it],
				"principalPaydown" 	: paydownPrincipal,
				"capital"			: capital[it],
				"payInterest" 		: payInterest[it],
				"ii" 				: II[it],
				"increase"			: Increase[it],
				"total"				: total,
				"totalPayment"		: totalPayment,
				"totalInterest" 	: totalInterest,
				"inflation"			: inflation,
				"principal"			: Principal,
				"interest"			: Interest,
				"cpi"				: CPI,
				"d"					: D 

			}

			returnObj.push(object);
		}
		
	}
	totalInterest = totalPayment - total;

  	return returnObj;

}
/* Dates for x duration */






