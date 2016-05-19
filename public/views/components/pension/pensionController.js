app.controller('PensionCtrl', ['$scope', '$state', 'FrontFact', '$timeout', '$translate', 'IndexedFact', 'CompoundFact',
    function ($scope, $state, FrontFact, $timeout, $translate, IndexedFact, CompoundFact) {
/* Translator */
		$scope.changeLanguage = function (key) {
			$translate.use(key);
		};

/* Scope vaiables declared */
		$scope.compareLoan 			= [];
		$scope.compoundLoan 		= [];
		$scope.principal 			= 20000000;
		$scope.interest 			= 4;
		$scope.duration 			= 480;
		$scope.compound 			= 5.5;
		$scope.compoundInterest		= 7.05;
		$scope.pay  				= 280000;
		$scope.userPercent 			= 2;
		$scope.payerPercent			= 2;


/* Global used variables for graphs */
		var log  				= []; // graph indexed loan array 
		var logPayDown 			= [];


		var log1				= []; // graph compound loan array
/* Calling the graph for representation on frontpage. */
		getLoan();
		$scope.checkLoan = function () {

			$scope.indexedLoan 		= [];
			$scope.compoundLoan 	= [];
			log  					= [];
			logPayDown 				= [];

			indexPayment 			= [];
			indexInterest 			= [];
			indexCapital 			= [];

			log1 					= [];
			compoundPayment 		= [];
			compoundInterest 		= []; 
			compoundCapital  		= [];
console.log();	
			getLoan();
		}

		function getLoan() {
/* Calls to factory -> API  */
/* Indexed data */
			$scope.payOnPrincipal = $scope.pay * (($scope.payerPercent+$scope.userPercent)/100)
			IndexedFact.getIndexedloan(

		    	{
					principal : $scope.principal,
					interest  : $scope.interest,
					duration  : $scope.duration,
					cpi 	  : $scope.compound

		    	}

	    		).then(function (response) {
	    	 	var indexedLoan = response.data; 
	    	 	
	    	 	log.push({
			  			x : 0, 
			  			y: $scope.principal 
			  		});

	            angular.forEach(indexedLoan, function (value, key) {
			  		log.push({
			  			x : value.id, 
			  			y: Math.round(value.p)
			  		});

				});
			});
	    	IndexedFact.getIndexloanPaydown(

		    	{
					principal : $scope.principal,
					interest  : $scope.interest,
					duration  : $scope.duration,
					cpi 	  : $scope.compound,
					payDown   : $scope.payOnPrincipal

		    	}

	    		).then(function (response) {
	    	 	var indexedLoan = response.data; 
	    	 	
	    	 	logPayDown.push({
			  			x : 0, 
			  			y: $scope.principal 
			  		});

	            angular.forEach(indexedLoan, function (value, key) {
			  		logPayDown.push({
			  			x : value.id, 
			  			y: Math.round(value.p)
			  		});

				});
			});
	    	IndexedFact.getIndexloanFinalResult(

		    	{
					principal : $scope.principal ,
					interest  : $scope.interest,
					duration  : $scope.duration,
					cpi 	  : $scope.compound,
					payDown   : $scope.payOnPrincipal

		    	}

	    		).then(function (results) {
	    			$scope.indexedLoanResult = results.data[0];
	    			
			});


/* Compound data */
			CompoundFact.getCompoundloan(

					{
					
					principal : $scope.principal,
					interest  : $scope.compoundInterest,
					duration  : $scope.duration,
				
					}

				).then(function (response) {

       			var compoundLoan = response.data;
       			$scope.compoundLoan = response.data;

       			log1.push({
			  			x : 0, 
			  			y : Math.round($scope.principal),
			  		});
       			angular.forEach(compoundLoan, function (value, key) {
       			
			  		log1.push({
			  			x : value.id, 
			  			y : value.principalLeft,
			  		});
				});
				
			}); 

	    		loadData();
		}	
/* Indexedloan chart starts */
		function loadData() {
			$scope.option = {
/* Configuration of the chart*/
			    chart: {
			        type 	: 'lineChart',
			        height 	: 400,
/* similar to css on the chart */
			        margin : {
			            top 	: 20,
			            right 	: 20,
			            bottom 	: 40,
			            left 	: 85
			        },
/* What the chart should be looking at in the object in data object*/
			        x: function(d){ return d.x; },
			        y: function(d){ return d.y; },
/* More configuration on the chart */
			        useInteractiveGuideline: true,
			        dispatch: {
			            stateChange: function(e){ console.log("stateChange"); },
			            changeState: function(e){ console.log("changeState"); },
			            tooltipShow: function(e){ console.log("tooltipShow"); },
			            tooltipHide: function(e){ console.log("tooltipHide"); }
			        },
			        xAxis: {
			            axisLabel: "Number of payment",
			            tickFormat: function(d){
			                return d3.format(",d")(d);
			            },

			        },
			        yAxis: {
			            axisLabel: '',
			            tickFormat: function(d){
			                return d3.format(",d")(d);
			            },
			            axisLabelDistance: -10
			        },
			        callback: function(chart){
			            console.log("!!! lineChart callback !!!");
			        }
			    },
/* Text to the chart */	
			    title: {
			        enable: true,
					text: "Indexed Loan vs Indexed Loan payed down on principal"
			    },
			    subtitle: {
			        enable 	: true,
			        text 	: 'This chart shows how paying '+$scope.payDown+' towards the '+($scope.principal /1000000) +'M ISK principal each month on indexed linked loan',
			        css 	: {
			            'text-align': 'center',
			            'margin'	: '30px 0px 10px 0px'
			        }
			    },
			};
/* Data object for the chart above2 */
			$scope.data = [
				{
			        values 	: log,
			        key 	: 'Indexed linked loan', 
			        color 	: '#00ffcc',
			        area 	: true 
			    },
				{
			        values 	: logPayDown,
			        key 	: 'Inexed linked loan payed down', 
			        color 	: '#0000cc',
			        area 	: true 
			    }

			];
			/* Interest and payment chart starts */
		}


    }
]);// getIndexloanPaydownFinalResult
