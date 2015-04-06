'use strict';

angular.module('trusteesApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth, $state, $mdSidenav, Logger, $rootScope, $timeout) {

    var logger = Logger.getLogger($scope.controllerName);


    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;
    $scope.historyBack = _.debounce(historyBack, 20, true);
    $scope.toggleMenu = _.debounce(toggleMenu, 20, false);


    $scope.logout = logout;

    $scope.enableMenuButton = $state.current.enableMenuButton;
    $scope.enableBackButton = $state.current.enableBackButton;
    $scope.navigationTitle  = $state.current.navigationTitle;

    return;


    /**
     *
     */
    function logout(){
      Auth.logout();
      $location.path('/login');
    }

    /**
     *
     */
    function historyBack(){
      window.history.back();
    }

    /**
     *
     */
    function toggleMenu(){
      logger.debug('NavbarCtrl:toggleMenu');

      $mdSidenav('right').open();
    }



  });
