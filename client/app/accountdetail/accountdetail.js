'use strict';

angular.module('trusteesApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('accountdetail', {
        authenticate: true,
        enableBackButton: true,
        enableMenuButton: true,
        navigationTitle: 'Account Detail',
        url: '/accountdetail/{accountid}',
        templateUrl: 'app/accountdetail/accountdetail.html',
        controller: 'AccountdetailCtrl'
      });
  });
