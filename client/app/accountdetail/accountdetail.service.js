'use strict';

angular.module('trusteesApp')
  .service('accountdetail', function ($q) {

    var self = this;


    self.getTransactions = getTransactions;


    return self;


    function getTransactions() {
      return $q.when([
        {
          id: 1,
          title: 'Transaction 01'
        },
        {
          id: 2,
          title: 'Transaction 02'
        },
        {
          id: 3,
          title: 'Transaction 03'
        },
        {
          id: 4,
          title: 'Transaction 04'
        },
        {
          id: 5,
          title: 'Transaction 05'
        },
        {
          id: 6,
          title: 'Transaction 06'
        },
        {
          id: 7,
          title: 'Transaction 07'
        }
      ]);
    }




  });
