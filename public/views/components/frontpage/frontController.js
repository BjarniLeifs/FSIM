app.controller('FrontCtrl', ['$scope', '$state', 'FrontFact', '$timeout', '$translate', 'IndexedFact', 'CompoundFact',
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


/* Global used variables for graphs */
		var log  				= []; // graph indexed loan array 
		var log1 				= []; // graph indexed loan array
		var log2 				= []; // graph indexed loan array
		var log3 				= []; // graph indexed loan array
		var log4 				= []; // graph indexed loan array
		var indexPayment 		= []; // payment result index array
		var indexInterest 		= []; // payment result index array
		var indexCapital 		= []; // payment result index array

		var log5 				= []; // graph compound loan array
		var compoundPayment 	= []; // payment result compound array
		var compoundInterest 	= []; // payment result compound array
		var compoundCapital 	= []; // payment result compound array
/* Calling the graph for representation on frontpage. */
		getIndexLoan();
		$scope.checkLoan = function () {
			$scope.indexedLoan 		= [];
			$scope.compoundLoan 	= [];
			log  					= [];
			log1 					= [];
			log2 					= [];
			log3 					= [];
			log4 					= [];
			indexPayment 			= [];
			indexInterest 			= [];
			indexCapital 			= [];

			log5 					= [];
			compoundPayment 		= [];
			compoundInterest 		= []; 
			compoundCapital  		= [];

			getIndexLoan();
		}

		function getIndexLoan() {
/* Calls to factory -> API  */
/* Indexed data */
			IndexedFact.getIndexedloan(

		    	{
					principal : $scope.principal,
					interest  : $scope.interest,
					duration  : $scope.duration,
					cpi 	  : $scope.compound - 1.5

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
	    	IndexedFact.getIndexedloan(

		    	{
					principal : $scope.principal,
					interest  : $scope.interest,
					duration  : $scope.duration,
					cpi 	  : $scope.compound - 0.5

		    	}

	    		).then(function (response) {
	    	 	var indexedLoan = response.data; 
		
	            angular.forEach(indexedLoan, function (value, key) {

			  		log1.push({
			  			x : value.id, 
			  			y : Math.round(value.p)
			  		});

				});
			});
	    	IndexedFact.getIndexedloan(

		    	{
					principal : $scope.principal ,
					interest  : $scope.interest,
					duration  : $scope.duration,
					cpi 	  : $scope.compound

		    	}

	    		).then(function (response) {
	    	 	var indexedLoan = response.data; 

	            angular.forEach(indexedLoan, function (value, key) {
			  		log2.push({
			  			x : value.id, 
			  			y : Math.round(value.p)
			  		});
			  		indexPayment.push({
			  			x : value.id, 
			  			y : Math.round(value.payment)
			  		});
					indexInterest.push({
						x : value.id, 
						y : Math.round(value.payInterest)
					});
					indexCapital.push({
						x : value.id, 
						y : Math.round(value.capital)
					});

				});
			});
	    	IndexedFact.getIndexedloan(

		    	{
					principal : $scope.principal,
					interest  : $scope.interest,
					duration  : $scope.duration,
					cpi 	  : $scope.compound + 0.5

		    	}

	    		).then(function (response) {
	    	 	var indexedLoan = response.data; 
		
	            angular.forEach(indexedLoan, function (value, key) {
			  		log3.push({
			  			x : value.id, 
			  			y: Math.round(value.p)
			  		});

				});
			});
	    	IndexedFact.getIndexedloan(

		    	{
					principal : $scope.principal,
					interest  : $scope.interest,
					duration  : $scope.duration,
					cpi 	  : $scope.compound + 1.5

		    	}


	    		).then(function (response) {
	    	 	var indexedLoan = response.data; 

	            angular.forEach(indexedLoan, function (value, key) {
			  		log4.push({
			  			x : value.id, 
			  			y: Math.round(value.p), date: value.date
			  		});

				});
			});
	    	IndexedFact.getIndexloanFinalResult(

		    	{
					principal : $scope.principal ,
					interest  : $scope.interest,
					duration  : $scope.duration,
					cpi 	  : $scope.compound

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

       			log5.push({
			  			x : 0, 
			  			y : Math.round($scope.principal),
			  		});
       			angular.forEach(compoundLoan, function (value, key) {
       			
			  		log5.push({
			  			x : value.id, 
			  			y : value.principalLeft,
			  		});
			  		compoundPayment.push({
			  			x : value.id, 
			  			y : Math.round(value.payment)
			  		});
					compoundInterest.push({
						x : value.id, 
						y : Math.round(value.interest)
					});
					compoundCapital.push({
						x : value.id, 
						y : Math.round(value.capital)
					});
				});
				CompoundFact.getCompoundFinalResult(
										
					{					
						principal : $scope.principal,
						interest  : $scope.compoundInterest,
						duration  : $scope.duration,
				
					}
				
				).then(function (results) {
					$scope.compoundLoanResult = results.data[0];
					$scope.absCompare = Math.abs($scope.compoundLoanResult.totalPayed - $scope.indexedLoanResult.total);
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
					text: "Indexed Loan vs Compound Loan"
			    },
			    subtitle: {
			        enable 	: true,
			        text 	: 'This chart shows how sensitive indexed loan are to CPI, additional compound loan. The chart has principall of '+($scope.principal/1000000)+' M.ISK, '+$scope.interest+'% indexed and '+$scope.compoundInterest+'% interest rate over '+($scope.duration/12)+' years. The analysis for indexed loan is from ' +($scope.compound - 1.5)+ '% to ' +($scope.compound + 1.5)+'%. You can adjust this above to get costum results of your own.',
			        css 	: {
			            'text-align': 'left',
			            'margin'	: '30px 0px 10px 0px'
			        }
			    },
			};
/* Data object for the chart above2 */
			$scope.data = [
				{
			        values 	: log4,
			        key 	: 'Indexed CPI ' + ($scope.compound + 1.5) +'%', 
			        color 	: '#00ffcc'
			    },
				{
			        values 	: log3,
			        key 	: 'Indexed CPI ' + ($scope.compound + 0.5) +'%',    
			        color 	: '#8800cc' 

			    },
				{
			        values 	: log2,
			        key 	: 'Indexed CPI ' + ($scope.compound) +'%', 
			        color 	: '#29a329',
			        area 	: true 
			    },
				{
			        values 	: log1,
			        key 	: 'Indexed CPI ' + ($scope.compound - 0.5) +'%', 
			        color 	: '#c6538c' 
			    },

				{
			        values 	: log,
			        key 	: 'Indexed CPI ' + ($scope.compound - 1.5) +'%', 
			        color 	: '#ff7f0e' 
			    }
			    ,
				{
			        values 	: log5,
			        key 	: ' Compound ' + $scope.compoundInterest +'%', 
			        color 	: '#0000ff',
			        area 	: true 
			    }

			];
			/* Interest and payment chart starts */

        
			$scope.payOption = {
			    chart: {
			        type 	: 'lineChart',
			        height 	: 400,
			        margin  : {
			            top 	: 20,
			            right 	: 20,
			            bottom 	: 40,
			            left 	: 85
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
			            axisLabel: 'Number of payments',
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
			    title: {
			        enable 	: true,
			        text 	: 'Payment to the principal on the loans.'
			    },
			    subtitle: {
			        enable 	: true,
			        text 	: 'This chart shows how the total payment to principal of indexed loan vs compound loan. The chart has principall of '+($scope.principal/1000000)+' M.ISK, '+$scope.interest+'% indexed and '+$scope.compoundInterest+'% interest rate over '+($scope.duration/12)+' years. You can adjust this above to get costum results of your own.',
			        css 	: {
			            'text-align': 'left',
			            'margin': '30px 0px 30px 0px'
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
			$scope.payData = [
	            {
	                values 	: indexPayment,
	                key 	: 'Indexed payment', 
	                color 	: '#29a329',
	                area 	: true 
	            },
	            {
	                values 	: compoundPayment,
	                key 	: 'Compound payment', 
	                color 	: '#0000ff',
	                area 	: true 
	            },
			];
			$scope.capitalOption = {
			    chart: {
			        type 	: 'lineChart',
			        height 	: 400,
			        margin  : {
			            top 	: 20,
			            right 	: 20,
			            bottom 	: 40,
			            left 	: 85
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
			            axisLabel: 'Number of payments',
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
			    title: {
			        enable 	: true,
			        text 	: 'Total payment of the loans.'
			    },
			    subtitle: {
			        enable 	: true,
			        text 	: 'This chart shows how the total payment on indexed loan vs compound loan. The chart has principall of '+($scope.principal/1000000)+' M.ISK, '+$scope.interest+'% indexed and '+$scope.compoundInterest+'% interest rate over '+($scope.duration/12)+' years. You can adjust this above to get costum results of your own.',
			        css 	: {
			            'text-align': 'left',
			            'margin': '30px 0px 10px 0px'
			        }
			    },
			};
			$scope.capitalData = [
	            {
	                values  : indexCapital,
	                key 	: 'Indexed total', 
	                color 	: '#29a329',
	                area 	: true 
	            },
	            {
	                values  : compoundCapital,
	                key 	: 'Compound total', 
	                color 	: '#0000ff',
	                area 	: true 
	            },
			];
			$scope.interestOption = {
			    chart: {
			        type 	: 'lineChart',
			        height 	: 400,
			        margin  : {
			            top 	: 20,
			            right 	: 20,
			            bottom 	: 40,
			            left 	: 85
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
			            axisLabel: 'Number of payments',
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
			    title: {
			        enable 	: true,
			        text 	: 'Total interest on the loans.'
			    },
			    subtitle: {
			        enable 	: true,
			        text 	: 'This chart shows how the total payment on indexed loan vs compound loan. The chart has principall of '+($scope.principal/1000000)+' M.ISK, '+$scope.interest+'% indexed and '+$scope.compoundInterest+'% interest rate over '+($scope.duration/12)+' years. You can adjust this above to get costum results of your own.',
			        css 	: {
			            'text-align': 'left',
			            'margin': '30px 0px 10px 0px'
			        }
			    },
			};
			$scope.interestData = [
	            {
	                values 	: indexInterest,
	                key 	: 'Indexed interest', 
	                color 	: '#29a329',
	                area 	: true 
	            },
	            {
	                values 	: compoundInterest,
	                key 	: 'Compound interest', 
	                color 	: '#0000ff',
	                area 	: true 
	            },
			];

		
/* Interest and payment chart ends */ 
		}
/* Indexedloan chart ends */

    }
]);
