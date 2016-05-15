app.controller('CompoundCtrl', ['$scope', '$state', '$timeout', 'CompoundFact', '$filter',
    function ($scope, $state, $timeout, CompoundFact, $filter) {
/* Scope variables declared */
   		$scope.principal 	= 20000000; 
   		$scope.duration  	= 480;
   		$scope.interest  	= 7.05;
   		$scope.compoundLoan = [];

/* Global used variables for graphs */
		var log 				= [];
		var payment 			= [];
		var dates 				= [];
		var interest 			= [];
		var capital 			= [];
		var orginalPrincipal 	= [];


/* Object to send to api */

/* Functions */
		$scope.checkLoan = function () {
			log 				= [];
			payment 			= [];
			dates 				= [];
			interest 			= [];
			capital 			= [];
			orginalPrincipal 	= [];
			var sendMe = {
				principal : $scope.principal,
				interest  : $scope.interest,
				duration  : $scope.duration,
			};
		
			getCompoundLoan(sendMe);
			loadCompoundLoan();
		}

		function getCompoundLoan (obj) {
/* Calls to factory -> API  */
       		CompoundFact.getCompoundloan(obj).then(function (response) {

       			var compoundLoan = response.data;
       			$scope.compoundLoan = response.data;
       			console.log(response.data);
       			log.push({
			  			x : 0, 
			  			y : Math.round($scope.principal),
			  		});
       			angular.forEach(compoundLoan, function (value, key) {
       			
			  		log.push({
			  			x : value.id, 
			  			y : value.principalLeft,
			  		});
			  		payment.push({
			  			x : value.id, 
			  			y : Math.round(value.payment)
			  		});
					interest.push({
						x : value.id, 
						y : Math.round(value.interest)
					});
					capital.push({
						x : value.id, 
						y : Math.round(value.capital)
					});
				});


			}); 

			CompoundFact.getCompoundFinalResult(obj).then(function (results) {
				$scope.loanResult = results.data;	
			});
		}

/* Indexedloan chart starts */
		function loadCompoundLoan() {
			$scope.CompoundLoanOption = {
/* Configuration of the chart*/
			    chart: {
			        type 	: 'lineChart',
			        height 	: 400,
/* similar to css on the chart */
			        margin  : {
			            top 	: 20,
			            right 	: 20,
			            bottom 	: 40,
			            left 	: 115
			        },
/* What the chart should be looking at in the object in data object*/
			        x: function(d){ return d.x; },
			        y: function(d){ return d.y | 0; },
/* More configuration on the chart */
			        useInteractiveGuideline: true,
			        dispatch: {
			            stateChange: function(e){ console.log("stateChange"); },
			            changeState: function(e){ console.log("changeState"); },
			            tooltipShow: function(e){ console.log("tooltipShow"); },
			            tooltipHide: function(e){ console.log("tooltipHide"); }
			        },
			        xAxis: {
			            axisLabel: 'Number of payments',
			            tickFormat: function(d){
			                return d3.format(",d")(d);
			            },

			        },
			        yAxis: {
			            axisLabel : '',
			            tickFormat: function(d){
			                return d3.format(",d")(d);
			            },
			            axisLabelDistance: 0
			        },
			        callback: function(chart){
			            console.log("!!! lineChart callback !!!");
			        }
			    },
/* Text to the chart */
			    title: {
			        enable: true,
			        text: "Compound Loan"
			
			    },
			    subtitle: {
			        enable 	: true,
			        text 	: 'This chart shows the principal of Compound loan.',
			        css 	: {
			            'text-align': 'center',
			            'margin'	: '10px 13px 0px 7px'
			        }
			    },
			    /*
			    caption: {
			        enable 	: true,
			        html 	: '<b>Figure 1.</b> Lorem ipsum dolor sit amet, at eam blandit sadipscing, <span style="text-decoration: underline;">vim adhuc sanctus disputando ex</span>, cu usu affert alienum urbanitas. <i>Cum in purto erat, mea ne nominavi persecuti reformidans.</i> Docendi blandit abhorreant ea has, minim tantas alterum pro eu. <span style="color: darkred;">Exerci graeci ad vix, elit tacimates ea duo</span>. Id mel eruditi fuisset. Stet vidit patrioque in pro, eum ex veri verterem abhorreant, id unum oportere intellegam nec<sup>[1, <a href="https://github.com/krispo/angular-nvd3" target="_blank">2</a>, 3]</sup>.',
			        css 	: {
			            'text-align': 'justify',
			            'margin'	: '10px 13px 0px 7px'
			        }
			    }
			    */
			};
/* Data object for the chart above */
			$scope.CompoundLoanData = [
				{
			        values 	: log,
			        key 	: 'Höfuðstóll', 
			        color 	: '#ff7f0e', 
			        area 	: true 
			    }

			];
/* Indexedloan chart ends */

/* Interest and payment chart starts */

        
			$scope.intPayOption = {
			    chart: {
			        type 	: 'lineChart',
			        height 	: 400,
			        margin  : {
			            top 	: 20,
			            right 	: 20,
			            bottom 	: 40,
			            left 	: 115
			        },
			        x: function(d){ return d.x; },
			        y: function(d){ return d.y; },

			        useInteractiveGuideline: true,
			        dispatch: {
			            stateChange: function(e){ console.log("stateChange"); },
			            changeState: function(e){ console.log("changeState"); },
			            tooltipShow: function(e){ console.log("tooltipShow"); },
			            tooltipHide: function(e){ console.log("tooltipHide"); }
			        },
			        xAxis: {
			            axisLabel: 'Number of payments'
			        },
			        yAxis: {
			            axisLabel: '',
			            tickFormat: function(d){
			                return d3.format("0,000")(d);
			            },
			            axisLabelDistance: -10
			        },
			        callback: function(chart){
			            console.log("!!! lineChart callback !!!");
			        }

			    },
			    title: {
			        enable 	: true,
			        text 	: 'Payment on principal, interest and total payment.'
			    },
			    subtitle: {
			        enable 	: true,
			        text 	: "This chart shows how the payment is on Compound Loan",
			        css 	: {
			            'text-align': 'center',
			            'margin': '20px 13px 0px 7px'
			        }
			    },
			    /*
			    caption: {
			        enable 	: true,
			        html 	: '<b>Figure 1.</b> Lorem ipsum dolor sit amet, at eam blandit sadipscing, <span style="text-decoration: underline;">vim adhuc sanctus disputando ex</span>, cu usu affert alienum urbanitas. <i>Cum in purto erat, mea ne nominavi persecuti reformidans.</i> Docendi blandit abhorreant ea has, minim tantas alterum pro eu. <span style="color: darkred;">Exerci graeci ad vix, elit tacimates ea duo</span>. Id mel eruditi fuisset. Stet vidit patrioque in pro, eum ex veri verterem abhorreant, id unum oportere intellegam nec<sup>[1, <a href="https://github.com/krispo/angular-nvd3" target="_blank">2</a>, 3]</sup>.',
			        css 	: {
			            'text-align': 'justify',
			            'margin': '10px 13px 0px 7px'
			        }
			    }
			    */
			};
			$scope.intPaydata = [

	            {
	                values 	: interest,
	                key 	: 'vextir', 
	                color 	: '#b30000',
	                area 	: true 
	            },
	            {
	                values  : capital,
	                key 	: 'innborgun', 
	                color 	: '#0000ff',
	                area 	: true 
	            },
	            {
	                values 	: payment,
	                key 	: 'afborgun', 
	                color 	: '#29a329',
	                area 	: true 
	            },
			];
		}

	}
]);

