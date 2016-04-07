angular.module('list',[
])
	.config(['$stateProvider',function($stateProvider) {
		$stateProvider
			.state('mars.list', {
				url: "/list",
				views: {
					'main@': {
						templateUrl: "template/list.html",
						controller: "listController as listCtrl"
					}
				}
	    	});
	}])

	.controller('listController',['Mars', function(Mars) {
		var listCtrl = this;
		Mars.getList().then(function(list){
			listCtrl.list = list;
		})

		listCtrl.getDetail = function(id) {
			Mars.setDetail(id);
			window.location.href="/#/detail#"+id;
		}
	}]);