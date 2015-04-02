'use strict';

angular.module('trusteesApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('admin', {
        url: '/admin',
        authenticated: true,
        templateUrl: 'app/admin/admin.html',
        controller: 'AdminCtrl'
      });
  });
