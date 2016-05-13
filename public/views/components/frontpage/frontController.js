app.controller('FrontCtrl', ['$scope', '$state', 'FrontFact', '$timeout', '$translate', 'IndexedFact',
    function ($scope, $state, FrontFact, $timeout, $translate, IndexedFact) {
		/* Translator */
		$scope.changeLanguage = function (key) {
			$translate.use(key);
		};

/* Scope vaiables declared */
		$scope.indexedLoan = [];


/* Global used variables for graphs */
		var log  = [];
		var log1 = [];
		var log2 = [];
		var log3 = [];
		var log4 = [];
		var log5 = [];
		var log6 = [];




		getIndexLoan();



		function getIndexLoan() {


/* Calls to factory -> API  */
			IndexedFact.getIndexedloan(

		    	{
					principal : 20000000,
					interest  : 4.5,
					duration  : 480,
					cpi 	  : 3.5

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
					principal : 20000000,
					interest  : 4.5,
					duration  : 480,
					cpi 	  : 4

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
					principal : 20000000,
					interest  : 4.5,
					duration  : 480,
					cpi 	  : 4.5

		    	}
	    		).then(function (response) {
	    	 	var indexedLoan = response.data; 

	    	 	console.log(response.data);  		
	            angular.forEach(indexedLoan, function (value, key) {

			  		log2.push({
			  			x : value.id, 
			  			y: Math.round(value.p)
			  		});

				});
			});
	    	IndexedFact.getIndexedloan(

		    	{
					principal : 20000000,
					interest  : 4.5,
					duration  : 480,
					cpi 	  : 5

		    	}
	    		).then(function (response) {
	    	 	var indexedLoan = response.data; 
	    	 	console.log(response.data);  		
	            angular.forEach(indexedLoan, function (value, key) {
			  		log3.push({
			  			x : value.id, 
			  			y: Math.round(value.p)
			  		});

				});
			});
	    	IndexedFact.getIndexedloan(

		    	{
					principal : 20000000,
					interest  : 4.5,
					duration  : 480,
					cpi 	  : 5.5

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
					principal : 20000000,
					interest  : 4.5,
					duration  : 480,
					cpi 	  : 6

		    	}


	    		).then(function (response) {
	    	 	var indexedLoan = response.data; 
	    	 	console.log(response.data);  		
	            angular.forEach(indexedLoan, function (value, key) {
			  		log5.push({
			  			x : value.id, 
			  			y: Math.round(value.p), date: value.date
			  		});

				});
			});
	    	IndexedFact.getIndexedloan(

		    	{
					principal : 20000000,
					interest  : 4.5,
					duration  : 480,
					cpi 	  : 6.5

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
			        type: 'lineChart',
			        height: 300,
			        /* similar to css on the chart */
			        margin : {
			            top: 200,
			            right: 20,
			            bottom:50,
			            left: 85
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
			            axisLabel: "Payment"

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
			    /* Text to the chart 
			    title: {
			        enable: true,
			
			    },

*/	
			};
			/* Data object for the chart above2 */
			$scope.Data = [
				{
			        values: log6,
			        key: 'CPI 6.5%', 
			        color: '#00ffcc'
			    },
			    {
			        values: log5,
			        key: 'CPI 6%', 
			        color: '#007acc' 
			    },
				{
			        values: log4,
			        key: 'CPI 5.5%',    
			        color: '#8800cc' 

			    },
				{
			        values: log3,
			        key: 'CPI 5%', 
			        color: '#b30000' 
			    },
				{
			        values: log2,
			        key: 'CPI 4.5%', 
			        color: '#c6538c' 
			    },
				{
			        values: log1,
			        key: 'CPI 4%', 
			        color: '#77773c'
			    },
				{
			        values: log,
			        key: 'CPI 3.5%', 
			        color: '#ff7f0e' 
			    }

			];
		}
	/* Indexedloan chart ends */



    }
]);
