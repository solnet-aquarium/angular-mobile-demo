'use strict';

angular.module('trusteesApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth, $state, snapper) {

    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;
    $scope.historyBack = historyBack;

    $scope.openRightSidedrawer   = snapper.openRightSideDrawer;
    $scope.closeRightSidedrawer  = snapper.closeRightSideDrawer;
    $scope.toggleRightSidedrawer = snapper.toggleRightSideDrawer;

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



  });
