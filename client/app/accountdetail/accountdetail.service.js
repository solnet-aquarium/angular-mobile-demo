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
          title: 'Transaction 05'
        },
        {
          id: 8,
          title: 'Transaction 06'
        },
        {
          id: 9,
          title: 'Transaction 05'
        },
        {
          id: 10,
          title: 'Transaction 06'
        },
        {
          id: 11,
          title: 'Transaction 05'
        },
        {
          id: 12,
          title: 'Transaction 06'
        },
        {
          id: 13,
          title: 'Transaction 05'
        },
        {
          id: 14,
          title: 'Transaction 06'
        },
        {
          id: 15,
          title: 'Transaction 05'
        },
        {
          id: 16,
          title: 'Transaction 06'
        }
      ]);
    }




  });
