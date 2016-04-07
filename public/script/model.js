angular.module('mars.model',[
])
	.service('Mars',['$http','$q',function($http,$q) {
		var that = this;
		
		that.date = null;
		
		that.getDate = function() {
			var deferred = $q.defer();
			
			$http({
				method: 'GET',
				url: '/zhihudata'
			})
			.then(function successCallback(res) {
				that.date = {
					data: res.data.date
				}
				deferred.resolve(that.date);
			})
			return deferred.promise;
		}

		that.list = null;
		
		that.getList = function() {
			var deferred = $q.defer();
			
			$http({
				method: 'GET',
				url: '/zhihudata'
			})
			.then(function successCallback(res) {
				that.list = {
					data: res.data.stories
				}
				deferred.resolve(that.list);
			})
			return deferred.promise;
		}
		
		that.detail = null;
		
		that.setDetail = function(id) {
			var deferred = $q.defer();

			$http({
					method: 'POST',
					url: '/detail',
					data: {'id':id}
				}).then(function successCallback(res) {
					console.log(res);
					that.detail = {
						data: res.data.body
					}
					deferred.resolve(that.detail);
				})
				return deferred.promise;
		}
		that.getDetail = function() {
			return that.detail;
		}
	}])