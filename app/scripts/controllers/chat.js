'use strict';

angular.module('hshacksChatApp')
  .controller('ChatCtrl', function ($scope, Chat) {
    $scope.user = 'Guest';
    $scope.profilePicture = 'http://i.imgur.com/Vn018nS.jpg';
    $scope.messages = Chat;
    $scope.addMessage = function () {
      $scope.messages.$add({
        user: $scope.user,
        message: $scope.message,
        image: $scope.profilePicture
      });

      $scope.message = '';
    };
  });
