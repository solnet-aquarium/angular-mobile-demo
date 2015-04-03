'use strict';

angular.module('trusteesApp')
  .controller('LoginCtrl', function ($scope, Auth, $state, $rootScope) {

    $scope.errors = {};

    $scope.previousLogins = Auth.getPreviousUsers();

    $scope.user = {};
    $scope.user.email = $rootScope.temporaryLoginUser || '';


    $scope.login = _.debounce(login, 50, true);
    $scope.quickAccess = _.debounce(quickAccess, 50, true);


    return;

    /**
     *
     * @param form
     */
    function login(form) {
      $scope.submitted = true;

      if(form.$valid) {

        $rootScope.temporaryLoginUser = $scope.user.email;

        Auth.setQuickAccessUser($scope.user.email);
        $state.go('quickaccess');

      }
    }


    /**
     *
     * @param email
     */
     function quickAccess(email){

      Auth.setQuickAccessUser(email);
      $state.go('quickaccess');

    }




  });
