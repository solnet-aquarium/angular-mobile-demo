'use strict';

angular.module('trusteesApp')
  .service('accounts', function ($q) {

    var self = this;


    self.getAccounts = getAccounts;


    return self;


    function getAccounts() {
      return $q.when([
        {
          id: 1,
          title: 'Account 01'
        },
        {
          id: 2,
          title: 'Account 02'
        },
        {
          id: 3,
          title: 'Account 03'
        },
        {
          id: 3,
          title: 'Account 04'
        },
        {
          id: 3,
          title: 'Account 05'
        },
        {
          id: 3,
          title: 'Account 06'
        }
      ]);
    }




  });
