'use strict';

angular.module('trusteesApp')
  .controller('MainCtrl', function ($scope, $http, socket, main, $state, Auth, $timeout, Logger, $rootScope) {


    var logger = Logger.getLogger($scope.controllerName);


    main.getMainItems().then(function(items){
      logger.debug('MainCtrl items', items);
      $scope.items = items;
    });


    $scope.navigateTo = _.debounce(navigateTo, 20, true);
    $scope.logout = _.debounce(logout, 20, true);


    return;


    /**
     *
     * @param state
     */
    function navigateTo(state){
      $state.go(state);
    }

    function logout(){
      Auth.logout();
      $timeout(function(){
        $state.go('login');
      });
    }

  });
