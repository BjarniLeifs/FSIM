var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/einn', function(req, res, next) {

	var ble = "2";
  	return res.status(200).json(ble);
});


router.get('/indexloan', function(req, res, next) {

	var Principal = req.body.principal,
	interest = req.body.interest,
	duration = req.body.duration,
	I = interest,
	D = ((30.0)/(360.0)),
	CPI = req.body.cpi,
	inflation = Math.pow((1.0 + CPI ),(1.0/12.0)) - 1,
	AF = [],
	P = [],
	Payment = [],
	Interest = [],
	II = [],
	P0 = [],
	tt = [],
	Increase = 0,
	Total = 0,
	Negam = 0,
	it;

	for (it = 0; it < duration; it++) {
		af.push((1/(D*I) - 1/((D*I) * Math.pow(1+D*I,duration-it))))

		if (it == 0) {
			II.push(100 + 100 * inflation);
			P.push(Principal * II[0]/100);
			Increase = P[0] - Principal;
		} else {

			II.push((P[i-1] - capital) * II[i]/II[i-1]);
		}
	}


	var ble = "2";
  	return res.status(200).json(ble);
});




module.exports = router;

/*
Where does this capital come from 


II.append(II[i-1] + II[i-1]*inflation)
P.append((P[i-1] - capital) * II[i]/II[i-1])
    increase = ((P[i-1] - capital) * II[i]/II[i-1]) - (P[i-1] - capital)
  payment  = P[i]/AF[i]
  interest = P[i] * Interest * D
  capital  = payment - interest
  total += capital
print "%0.1f %.2f %0.1f %0.1f %0.2f %0.1f  Inc:%0.1f" % (II[i],AF[i], P[i], payment, capital, interest, increase)
print "Capital paid = %.2f" % total


*/