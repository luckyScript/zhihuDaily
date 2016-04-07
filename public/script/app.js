var myApp = angular.module('app',[
	'ui.router',
	'mars.model',
	'list',
	'detail'
]);
myApp.controller('marsCtrl',['$scope','Mars',function($scope,Mars) {
	Mars.getDate().then(function(date){
		$scope.date = date.data;
	})
	$scope.urlBack = function() {
		window.location.href="/#list"
	}
}])

myApp.config(function($stateProvider, $urlRouterProvider) {
	//otherwise
	$urlRouterProvider.otherwise('/list');
	
	$stateProvider
		.state('mars', {
			url:'',
			abstract: true
		});  
})