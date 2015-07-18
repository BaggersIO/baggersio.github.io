;(function () {

	'use strict';

	angular.module('app', [

		'firebase'
	])

	.controller('ChatCtrl', ['$scope', '$firebaseArray', function ($scope, $firebaseArray) {

		$scope.loggedIn;
		$scope.nickName;
		$scope.message;
		$scope.messages = $firebaseArray(new Firebase('https://vivid-fire-5234.firebaseio.com/messages'));
		$scope.login = login;
		$scope.sendMessage = sendMessage;

		function login () {

			$scope.loggedIn = true;
		}

		function sendMessage () {

			$scope.messages.$add({
				nickName: $scope.nickName,
				message: $scope.message,
				dateTime: new Date().getTime()
			});

			$scope.message = '';
		}

	}]);

}());
