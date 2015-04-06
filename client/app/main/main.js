'use strict';

angular.module('trusteesApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        authenticate: true,
        enableMenuButton: true,
        navigationTitle: 'Trustees',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  });
