'use strict';

angular.module('trusteesApp')
  .controller('MainCtrl', function ($scope, $http, socket, main, $state, Auth, $timeout, Logger, $rootScope) {


    var logger = Logger.getLogger($scope.controllerName);


    main.getMainItems().then(function(items){
      logger.debug('MainCtrl items', items);
      $scope.items = items;
    });

  });
