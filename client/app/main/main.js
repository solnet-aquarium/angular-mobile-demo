'use strict';

angular.module('trusteesApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        authenticate: true,
        enableMenuButton: false,
        navigationTitle: 'Trustees',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  });
