;(function () {

	'use strict';

	angular.module('app', [

		'firebase',
		'ngStorage',
		'ng-appcache'
	])

	.controller('ChatCtrl', [
		'$scope', '$firebaseArray', 'appcache', '$localStorage', 'connection',
		function ($scope, $firebaseArray, appcache, $localStorage, connection) {

		$scope.$storage = $localStorage;
		$scope.message;
		$scope.messages = $firebaseArray(new Firebase('https://vivid-fire-5234.firebaseio.com/messages'));
		$scope.login = login;
		$scope.logout = logout;
		$scope.sendMessage = sendMessage;
		$scope.connection = connection;

		init();

		function init () {

			appcache.checkUpdate().then(function() {
				if (window.confirm('Application update available. Want to update now?')) {
					window.location.reload();
				}
			});
		}

		function login () {

			$scope.$storage.loggedIn = true;
		}

		function logout () {

			$scope.$storage.loggedIn = false;
		}

		function sendMessage () {

			$scope.messages.$add({
				nickName: $scope.$storage.nickName,
				message: $scope.message,
				dateTime: new Date().getTime()
			});

			$scope.message = '';
		}

	}])

	.service('connection', function () {

		this.online = navigator.onLine;

		window.addEventListener('online',  function () {

			console.log('online');

			this.online = true;
		}.bind(this), false);

		window.addEventListener('offline', function () {

			console.log('offline')

			this.online = false;
		}.bind(this), false);

	});

}());
