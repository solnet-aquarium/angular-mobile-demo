'use strict';

angular.module('trusteesApp')
  .controller('AccountdetailCtrl', function ($scope, accountdetail) {


    accountdetail.getTransactions().then(function success(transactions){
      $scope.transactions = transactions;
    });



  });
