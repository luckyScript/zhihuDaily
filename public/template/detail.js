angular.module('detail',[
])
	.config(['$stateProvider',function($stateProvider) {
		$stateProvider
			.state('mars.detail', {
				url: "/detail",
				views: {
					'main@': {
						templateUrl: "/template/detail.html",
						controller: "detailController as detailCtrl"
					}
				}
	    	});
	}])

	.controller('detailController',['Mars','$sce', function(Mars,$sce) {
		var detailCtrl = this;
		var id = window.location.hash.split("#")[2];
		console.log(id);
		Mars.setDetail(id).then(function(detail){
			detailCtrl.detail = detail.data;
			console.log(detailCtrl.detail);
			detailCtrl.trustDetail = $sce.trustAsHtml(detailCtrl.detail);
		});
	}]);