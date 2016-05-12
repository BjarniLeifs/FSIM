app.controller('IndexedLoanCtr', ['$scope', '$state', '$timeout', 'IndexedFact','$filter',
    function ($scope, $state, $timeout, IndexedFact, $filter) {
    	getIndexLoan();
/* Scope vaiables declared */
		$scope.indexedLoan = [];
		$scope.principal = 20000000;
		$scope.duration  = 480;
		$scope.interest  = 5.5;
		$scope.compound  = 5;

/* Global used variables for graphs */
		var log = [];
		var payment = [];
		var dates = [];
		var interest = [];
		var capital = [];
		var orginalPrincipal = [];
		if(true) {
			var test = "blassss";
		}
/* Functions */
		$scope.checkLoan = function () {
			 console.log($scope.principal)
		}

function getIndexLoan() {
	 /* body... */ 

/* Calls to factory -> API  */
    	IndexedFact.getIndexedloan().then(function (response) {
    	 	var indexedLoan = response.data; 
    	 	$scope.indexedLoan = response.data; 
    	 	console.log(response.data);  		
            angular.forEach(indexedLoan, function (value, key) {
            	var convertDate = $filter('date')(value.date, "yyyy-MM-dd");
		  		log.push({
		  			x : value.id, 
		  			y: Math.round(value.p), date: value.date
		  		});
		  		payment.push({
		  			x: value.id, 
		  			y: Math.round(value.payment)
		  		});
				dates.push({
					x: value.id, 
					y: convertDate
				});
				interest.push({
					x: value.id, 
					y: Math.round(value.payInterest)
				});
				capital.push({
					x: value.id, 
					y: Math.round(value.capital)
				});
				orginalPrincipal.push({
					x: value.id, 
					y: value.principal
				});

			});
		});
		IndexedFact.getIndexedLoanP().then(function (loanP) {
			//$scope.data = loanP.data;
		});
		IndexedFact.getindexloanFinalResult().then(function (results) {
			$scope.loanResult = results.data;
			console.log($scope.loanResult);
		});
	}	
/* Indexedloan chart starts */
		$scope.indexedLoanOption = {
			/* Configuration of the chart*/
		    chart: {
		        type: 'lineChart',
		        height: 400,
		        /* similar to css on the chart */
		        margin : {
		            top: 20,
		            right: 20,
		            bottom: 40,
		            left: 125
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
		            axisLabel: 'afborgun'

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
		    /* Text to the chart */
		    title: {
		        enable: true,
		        text: test
		    },
		    subtitle: {
		        enable: true,
		        text: 'Subtitle for simple line chart. Lorem ipsum dolor sit amet, at eam blandit sadipscing, vim adhuc sanctus disputando ex, cu usu affert alienum urbanitas.',
		        css: {
		            'text-align': 'center',
		            'margin': '10px 13px 0px 7px'
		        }
		    },
		    caption: {
		        enable: true,
		        html: '<b>Figure 1.</b> Lorem ipsum dolor sit amet, at eam blandit sadipscing, <span style="text-decoration: underline;">vim adhuc sanctus disputando ex</span>, cu usu affert alienum urbanitas. <i>Cum in purto erat, mea ne nominavi persecuti reformidans.</i> Docendi blandit abhorreant ea has, minim tantas alterum pro eu. <span style="color: darkred;">Exerci graeci ad vix, elit tacimates ea duo</span>. Id mel eruditi fuisset. Stet vidit patrioque in pro, eum ex veri verterem abhorreant, id unum oportere intellegam nec<sup>[1, <a href="https://github.com/krispo/angular-nvd3" target="_blank">2</a>, 3]</sup>.',
		        css: {
		            'text-align': 'justify',
		            'margin': '10px 13px 0px 7px'
		        }
		    }
		};
		/* Data object for the chart above2 */
		$scope.indexedLoanData = [
			{
		        values: orginalPrincipal,
		        key: 'Láns fjárhæð', 
		        color: '#00b300', 
		        area: true 
		    },
			{
		        values: log,
		        key: 'Höfuðstóll', 
		        color: '#ff7f0e', 
		        area: true 
		    }

		];
/* Indexedloan chart ends */
/* Interest and payment chart starts */

/* Interest and payment chart ends */           
		$scope.intPayOption = {
		    chart: {
		        type: 'lineChart',
		        height: 400,
		        margin : {
		            top: 20,
		            right: 20,
		            bottom: 40,
		            left: 125
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
		            axisLabel: 'afborgun'

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
		        enable: true,
		        text: 'Title for Line Chart'
		    },
		    subtitle: {
		        enable: true,
		        text: 'Subtitle for simple line chart. Lorem ipsum dolor sit amet, at eam blandit sadipscing, vim adhuc sanctus disputando ex, cu usu affert alienum urbanitas.',
		        css: {
		            'text-align': 'center',
		            'margin': '10px 13px 0px 7px'
		        }
		    },
		    caption: {
		        enable: true,
		        html: '<b>Figure 1.</b> Lorem ipsum dolor sit amet, at eam blandit sadipscing, <span style="text-decoration: underline;">vim adhuc sanctus disputando ex</span>, cu usu affert alienum urbanitas. <i>Cum in purto erat, mea ne nominavi persecuti reformidans.</i> Docendi blandit abhorreant ea has, minim tantas alterum pro eu. <span style="color: darkred;">Exerci graeci ad vix, elit tacimates ea duo</span>. Id mel eruditi fuisset. Stet vidit patrioque in pro, eum ex veri verterem abhorreant, id unum oportere intellegam nec<sup>[1, <a href="https://github.com/krispo/angular-nvd3" target="_blank">2</a>, 3]</sup>.',
		        css: {
		            'text-align': 'justify',
		            'margin': '10px 13px 0px 7px'
		        }
		    }
		};
		$scope.intPaydata = [

            {
                values: interest,
                key: 'vextir', 
                color: '#b30000',
                area: true 
            },
            {
                values: capital,
                key: 'innborgun', 
                color: '#0000ff',
                area: true 
            },
                        {
                values: payment,
                key: 'afborgun', 
                color: '#29a329',
                area: true 
            },
		];









	





    }
]);