'use strict';

angular.module('hshacksChatApp')
  .controller('ChatCtrl', function ($scope, Chat) {
    $scope.user = 'Guest ';
    $scope.messages = Chat;
    $scope.addMessage = function () {
      $scope.messages.$add({user: $scope.user, message: $scope.message});
      $scope.message = '';
    };
  });
