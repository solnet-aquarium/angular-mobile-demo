'use strict';

angular.module('trusteesApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth, $state) {

    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;
    $scope.historyBack = _.debounce(historyBack, 16, true);

    $scope.goHome = _.debounce(goHome, 20, true);

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.enableMenuButton = $state.current.enableMenuButton;
    $scope.enableBackButton = $state.current.enableBackButton;
    $scope.navigationTitle  = $state.current.navigationTitle;

    return;

    /**
     *
     */
    function historyBack(){
      window.history.back();
    }

    function goHome(){
      $state.go('main');
    }



  });
