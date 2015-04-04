'use strict';

angular.module('trusteesApp')
  .controller('MainCtrl', function ($scope, $http, socket, main, $state, Auth, $timeout, Logger) {


    var logger = Logger.getLogger($scope.controllerName);


    main.getMainItems().then(function(items){
      logger.debug('MainCtrl items', items);
      $scope.items = items;
    });


    $scope.navigateTo = navigateTo;
    $scope.logout = logout;


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
