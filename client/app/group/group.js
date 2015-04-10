'use strict';

angular.module('myappApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('group', {
        url: '/group',
        templateUrl: 'app/group/group.html',
        controller: 'GroupCtrl',
        resolve:{
          groups:function(groupFactory, Auth){
            var user = Auth.getCurrentUser();
            return groupFactory.query({userId: user._id}).$promise;
          }
        }
      })
      .state('group_new', {
        url: '/group/new',
        templateUrl: 'app/group/group_new.html',
        controller: function($scope, groupFactory, Auth, $state){
          $scope.userId = Auth.getCurrentUser();
          $scope.groupAdd = function(form){

            groupFactory.save({
              userId: $scope.userId._id,
              name:form.text,
              _creator: $scope.userId._id,
              emails:form.email
              })
              .$promise
              .then(function(){
                console.log('save done');
                $state.go('group');
              });
          };
        }
      });
  });
