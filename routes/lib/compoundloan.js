var exports = module.exports = {};


exports.compoundLoan = function (duration, principal, interest) {
/* 
	Crosse refrenced with Arionbanki, there is a difference, 120 kr, and
	that is the extra fee the bank takes 
*/

/* Main input of the calculation for compound loan*/
		var duration  	 = duration;
		var principal 	 = principal;
		var interestrate = interest;
		var Q;
/* Calculation of montly interest*/
		var J 			 = (interestrate / 12) / 100 ;
/* Setup for calculation */
		var N 			 = duration;
		var P 			 = principal;
/* Array for results of calculation */
		var capital   	 = [];
		var interest 	 = [];
		var payment  	 = [];
		var step     	 = [];
		var princ    	 = [];
		var dates 		 = [];
/* Return object */
		var returnMe 	 = [];
		var dummyPrinc 	 = 0;
/* Payment */
		var M = P * (J/(1 - Math.pow(1 + J, N * -1)));
		for (var i = 0; i < duration ; i++) {
			var CurrentDate = new Date();
			CurrentDate.setMonth(CurrentDate.getMonth() + (i+1));
			dates.push(CurrentDate);
/* Monthly Interest */			
			H = P * J;
/* Captial repayment */					
    		C = M - H;
/* New capital balance */
    		Q = P - C;
/* Collecting information to arrays */
			capital.push(C);
			interest.push(H);
			payment.push(M);
			step.push(i);
			princ.push(P);

			P = Q;
			if (Math.floor(P) < 0)
				dummyPrinc = 0;
			else
				dummyPrinc = Math.floor(P);

			var object = {
				"duration"  	 : duration - i,
				"startPrincipal" : principal,
				"interestRate" 	 : interestrate,
				"id" 			 : step[i] + 1,
				"date" 			 : dates[i],
				"capital"  		 : Math.floor(capital[i]),
				"interest" 		 : Math.floor(interest[i]),
				"payment" 	     : Math.floor(payment[i]),
				"principal"      : Math.floor(princ[i]),
				"j"				 : J,
				"principalLeft"  : dummyPrinc,
				"bankFee"		 : 120,
				"totalPayment" 	 : Math.floor(payment[i] + 120),

			}
			returnMe.push(object);
		}




	
  	return returnMe;

};


exports.compoundLoanFinalResult = function (duration, principal, interest) {

/* Main input of the calculation for compound loan*/
		var duration  	 = duration;
		var principal 	 = principal;
		var interestrate = interest;
		var Q;
/* Calculation of montly interest*/
		var J 			 = (interestrate / 12) / 100 ;
/* Setup for calculation */
		var N 			 = duration;
		var P 			 = principal;
/* Array for results of calculation */
		var capital   	 = [];
		var interests 	 = [];
		var payment  	 = [];
		var step     	 = [];
		var princ    	 = [];
		var dates 			= [];
/* Return object */
		var returnMe 	 = [];
/* Payment */
		var M = P * (J/(1 - Math.pow(1 + J, N * -1)));

/* Variables to keep track of final result */
		var totalPayment  = 0;
		var totalInterest = 0;
		var totalcost     = 0;
		var fraction 	  = 0;

		for (var i = 0; i < duration ; i++) {
			var CurrentDate = new Date();
			CurrentDate.setMonth(CurrentDate.getMonth() + (i+1));
			dates.push(CurrentDate);
/* Monthly Interest */			
			H = P * J;
/* Captial repayment */					
    		C = M - H;
/* New capital balance */
    		Q = P - C;
/* Collecting information to arrays */
			capital.push(C);
			interests.push(H);
			payment.push(M);
			step.push(i);
			princ.push(P);

			P = Q;
			totalPayment  += Math.floor(capital[i]);
			totalInterest += Math.floor(interests[i]);
			totalcost 	  += 120;
			fraction 	  += Math.abs((Math.floor(interests[i]) - interests[i])) + Math.abs((Math.floor(capital[i]) - capital[i]));

			if (i == duration-1) {
				var object = {
					"duration"  	 : duration,
					"years"			 : duration/12,
					"principal"      : principal,
					"interest" 		 : interest,
					"totalInterest"  : totalInterest,
					"totalPayment"   : totalPayment,
					"fraction" 	 	 : Math.ceil(fraction),
					"totalPayed" 	 : totalInterest + totalPayment + totalcost + Math.ceil(fraction)


				}
				returnMe.push(object);
			}
		}




	
  	return returnMe;

};





