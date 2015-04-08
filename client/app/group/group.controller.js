'use strict';

angular.module('myappApp')
  .controller('GroupCtrl', function ($scope, groups) {
    $scope.group = groups;
  });
