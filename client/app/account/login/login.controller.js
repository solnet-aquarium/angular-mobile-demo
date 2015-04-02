'use strict';

angular.module('trusteesApp')
  .controller('LoginCtrl', function ($scope, Auth, $state) {

    $scope.errors = {};

    $scope.previousLogins = Auth.getPreviousUsers();

    $scope.user = {};
    $scope.user.email = undefined;
    $scope.user.password = undefined;


    $scope.login = function(form) {
      $scope.submitted = true;

      if(form.$valid) {

        Auth.setQuickAccessUser($scope.user.email);
        $state.go('quickaccess');

      }
    };



    $scope.quickAccess = function(email){

      Auth.setQuickAccessUser(email);
      $state.go('quickaccess');

    };




  });
