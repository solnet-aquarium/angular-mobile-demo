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
        $rootScope.openQuickaccess($scope.user.email);

      }
    }


    /**
     *
     * @param email
     */
     function quickAccess(email){
      $rootScope.openQuickaccess(email);
    }




  });
