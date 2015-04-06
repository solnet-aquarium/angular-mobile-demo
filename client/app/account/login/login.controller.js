'use strict';

angular.module('trusteesApp')
  .controller('LoginCtrl', function ($scope, Auth, $state, $rootScope, Logger) {


    var logger = Logger.getLogger($scope.controllerName);

    $scope.errors = {};

    $scope.previousLogins = Auth.getPreviousUsers();

    $scope.user = {};
    $scope.user.email = $rootScope.temporaryLoginUser || '';

    $scope.login = _.debounce(login, 20, true);
    $scope.quickAccess = _.debounce(quickAccess, 20, true);


    return;

    /**
     *
     * @param form
     */
    function login($event, form) {

      logger.debug(arguments);

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
     function quickAccess($event, email){
      $rootScope.openQuickaccess(email);
    }




  });
