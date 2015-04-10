'use strict';

angular.module('myappApp')
  .factory('groupFactory', function ($resource) {
    return $resource('/api/groups/:userId/:groupId',{userId: '@userId', groupId:'@Id'});
  });
