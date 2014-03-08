'use strict';

angular.module('hshacksChatApp')
  .controller('ChatCtrl', function ($scope, Chat) {
    $scope.user = {
      name: 'Guest',
      profilePicture: 'http://i.imgur.com/Vn018nS.jpg'
    };
    $scope.messages = Chat;

    $scope.addMessage = function () {
      $scope.messages.$add({
        user: $scope.user.name,
        message: $scope.message,
        image: $scope.user.profilePicture
      });

      $scope.message = '';
    };
  });
