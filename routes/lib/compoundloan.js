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
/* Return object */
		var returnMe 	 = [];
/* Payment */
		var M = P * (J/(1 - Math.pow(1 + J, N * -1)));
		for (var i = 0; i < duration ; i++) {
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
			var object = {
				"duration"  	 : duration - i,
				"startPrincipal" : principal,
				"interestRate" 	 : interestrate,
				"id" 			 : step[i],
				"capital"  		 : Math.floor(capital[i]),
				"interest" 		 : Math.floor(interest[i]),
				"payment" 	     : Math.floor(payment[i]),
				"principal"      : Math.floor(princ[i]),
				"j"				 : J,
				"PrincipalLeft"  : Math.floor(P),
				"bankFee"		 : 120,
				"totalPayment" 	 : Math.floor(payment[i] + 120),

			}
			returnMe.push(object);
		}




	
  	return returnMe;

};




