'use strict';

var Firebase;

angular.module('hshacksChatApp')
  .factory('Chat', function ($firebase) {
    var ref = new Firebase('https://hshacks.firebaseio.com');
    return $firebase(ref);
  });
