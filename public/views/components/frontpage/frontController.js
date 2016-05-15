app.controller('FrontCtrl', ['$scope', '$state', 'FrontFact', '$timeout', '$translate', 'IndexedFact',
    function ($scope, $state, FrontFact, $timeout, $translate, IndexedFact) {
/* Translator */
		$scope.changeLanguage = function (key) {
			$translate.use(key);
		};

/* Scope vaiables declared */
		$scope.indexedLoan = [];
		$scope.principal 		= 20000000;
		$scope.interest 		= 4;
		$scope.duration 		= 480;
		$scope.compound 		= 5,5;

/* Global used variables for graphs */
		var log  = [];
		var log1 = [];
		var log2 = [];
		var log3 = [];
		var log4 = [];
		var log5 = [];
		var log6 = [];
/* Calling the graph for representation on frontpage. */
		getIndexLoan();
		$scope.checkLoan = function () {
			log  = [];
			log1 = [];
			log2 = [];
			log3 = [];
			log4 = [];
			log5 = [];
			log6 = [];
			getIndexLoan();
		}

		function getIndexLoan() {
/* Calls to factory -> API  */
			IndexedFact.getIndexedloan(

		    	{
					principal : $scope.principal,
					interest  : $scope.interest,
					duration  : $scope.duration,
					cpi 	  : $scope.compound - 1.5

		    	}

	    		).then(function (response) {
	    	 	var indexedLoan = response.data; 
	    	 	console.log(response.data);  		
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
					cpi 	  : $scope.compound - 1

		    	}

	    		).then(function (response) {
	    	 	var indexedLoan = response.data; 
	    	 	console.log(response.data);  		
	            angular.forEach(indexedLoan, function (value, key) {

			  		log1.push({
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

	    	 	console.log(response.data);  		
	            angular.forEach(indexedLoan, function (value, key) {

			  		log2.push({
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
	    	 	console.log(response.data);  		
	            angular.forEach(indexedLoan, function (value, key) {
			  		log3.push({
			  			x : value.id, 
			  			y : Math.round(value.p)
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
	    	 	console.log(response.data);  		
	            angular.forEach(indexedLoan, function (value, key) {
			  		log4.push({
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
					cpi 	  : $scope.compound + 1

		    	}

	    		).then(function (response) {
	    	 	var indexedLoan = response.data; 
	    	 	console.log(response.data);  		
	            angular.forEach(indexedLoan, function (value, key) {
			  		log5.push({
			  			x : value.id, 
			  			y : Math.round(value.p), date: value.date
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
	    	 	console.log(response.data);  		
	            angular.forEach(indexedLoan, function (value, key) {
			  		log6.push({
			  			x : value.id, 
			  			y: Math.round(value.p), date: value.date
			  		});

				});
			});
	    		loadData();
		}	
/* Indexedloan chart starts */
		function loadData() {
			$scope.Option = {
/* Configuration of the chart*/
			    chart: {
			        type 	: 'lineChart',
			        height 	: 350,
/* similar to css on the chart */
			        margin : {
			            top 	: 40,
			            right 	: 50,
			            bottom 	: 50,
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
			            axisLabel: "Number of payment"

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
					text: "Indexed Loan"
			    },
			    subtitle: {
			        enable 	: true,
			        text 	: 'This chart shows how sensitive indexed loan are to CPI. The chart has principall of '+($scope.principal/1000000)+' M.ISK, '+$scope.interest+'% interest rate over '+($scope.duration/12)+' years. The analysis is from ' +($scope.compound - 1.5)+ ' to '+($scope.compound + 1.5)+'%.',
			        css 	: {
			            'text-align': 'center',
			            'margin'	: '10px 13px 0px 7px'
			        }
			    },


			};
/* Data object for the chart above2 */
			$scope.Data = [
				{
			        values 	: log6,
			        key 	: 'CPI ' + ($scope.compound + 1.5) +'%', 
			        color 	: '#00ffcc'
			    },
			    {
			        values 	: log5,
			        key 	: 'CPI ' + ($scope.compound + 1) +'%', 
			        color 	: '#007acc' 
			    },
				{
			        values 	: log4,
			        key 	: 'CPI ' + ($scope.compound + 0.5) +'%',    
			        color 	: '#8800cc' 

			    },
				{
			        values 	: log3,
			        key 	: 'CPI ' + ($scope.compound) +'%', 
			        color 	: '#b30000' 
			    },
				{
			        values 	: log2,
			        key 	: 'CPI ' + ($scope.compound - 0.5) +'%', 
			        color 	: '#c6538c' 
			    },
				{
			        values 	: log1,
			        key 	: 'CPI ' + ($scope.compound - 1) +'%', 
			        color 	: '#77773c'
			    },
				{
			        values 	: log,
			        key 	: 'CPI ' + ($scope.compound - 1.5) +'%', 
			        color 	: '#ff7f0e' 
			    }

			];
		}
/* Indexedloan chart ends */
    }
]);
