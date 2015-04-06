'use strict';

angular.module('trusteesApp')
  .controller('AccountdetailCtrl', function ($scope, accountdetail, $mdDialog) {


    accountdetail.getTransactions().then(function success(transactions){
      $scope.transactions = transactions;
    });


    $scope.transactionDialog = undefined;
    $scope.openTransaction = _.debounce(openTransaction, 20, true);


    return;


    /**
     *
     * @param transactionId
     */
    function openTransaction(transaction){
      $scope.transactionDialog = $mdDialog.alert({
        title: 'Transaction ' + transaction.id,
        content: transaction.info,
        ok: 'Close'
      });
      $mdDialog
        .show( $scope.transactionDialog )
        .finally(function() {
          $scope.transactionDialog = undefined;
        });
    }


  });
