app.controller('ContributorsCtrl', ['$scope', '$state', '$timeout',
    function ($scope, $state, $timeout) {
    	/* Change this url to github */
		$scope.projectUrl = "https://github.com/BjarniLeifs/FSIM";    	

		$scope.contributors = [
			{
				name  : 'Bjarni Kristján Leifsson',
				email : 'bjarnil10@ru.is',
				study : 'MSc Software Engineering',
				school : 'Reykjavík University'
			},
			{
				name  : 'Ísleifur Muggur Jónsson',
				email : 'isleifur14@ru.is',
				study : 'BSc Computer Science',
				school : 'Reykjavík University'
			},
			{
				name  : 'Jacky Mallett',
				email : 'jacky@ru.is',
				study : 'Phd Media Arts and Sciences',
				school : 'Massachusetts Institute of Technology'
			}

		];
    }
]);