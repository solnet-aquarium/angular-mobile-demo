'use strict';

angular.module('trusteesApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('accounts', {
        authenticate: true,
        enableBackButton: true,
        enableMenuButton: false,
        navigationTitle: 'Accounts',
        url: '/accounts',
        templateUrl: 'app/accounts/accounts.html',
        controller: 'AccountsCtrl'
      });
  });
