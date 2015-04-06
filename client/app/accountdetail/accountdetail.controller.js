'use strict';

angular.module('trusteesApp')
  .controller('AccountdetailCtrl', function ($scope, accountdetail, $mdBottomSheet, $mdDialog) {


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

      $mdBottomSheet.show({
        template: '<md-bottom-sheet>' +
                    '<h1>Transaction ' + transaction.id + '</h1>' +
                    '<h3>' + transaction.info + '</h3>' +
                    '<br><br><br>' +
                  '</md-bottom-sheet>'
      });

      //$scope.transactionDialog = $mdDialog.alert({
      //  title: 'Transaction ' + transaction.id,
      //  content: transaction.info,
      //  ok: 'Close'
      //});
      //$mdDialog
      //  .show( $scope.transactionDialog )
      //  .finally(function() {
      //    $scope.transactionDialog = undefined;
      //  });


    }


  });
