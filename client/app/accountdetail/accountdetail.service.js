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
          title: 'Transaction 01',
          info: 'Transaction info'
        },
        {
          id: 2,
          title: 'Transaction 02',
          info: 'Transaction info'
        },
        {
          id: 3,
          title: 'Transaction 03',
          info: 'Transaction info'
        },
        {
          id: 4,
          title: 'Transaction 04',
          info: 'Transaction info'
        },
        {
          id: 5,
          title: 'Transaction 05',
          info: 'Transaction info'
        },
        {
          id: 6,
          title: 'Transaction 06',
          info: 'Transaction info'
        },
        {
          id: 7,
          title: 'Transaction 07',
          info: 'Transaction info'
        }
      ]);
    }




  });
