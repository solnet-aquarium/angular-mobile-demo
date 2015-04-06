'use strict';

angular.module('trusteesApp')
  .controller('AccountsCtrl', function ($scope, accounts) {


    accounts.getAccounts().then(function success(accounts){
      $scope.accounts = accounts;
    });




  });
