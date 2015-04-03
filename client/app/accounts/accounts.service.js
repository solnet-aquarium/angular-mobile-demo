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
          title: 'mooo'
        },
        {
          id: 2,
          title: 'maaaa'
        },
        {
          id: 3,
          title: 'mmmmmmmm'
        },
        {
          id: 3,
          title: 'mmmmmmmm'
        },
        {
          id: 3,
          title: 'mmmmmmmm'
        },
        {
          id: 3,
          title: 'mmmmmmmm'
        },
        {
          id: 3,
          title: 'mmmmmmmm'
        },
        {
          id: 3,
          title: 'mmmmmmmm'
        },
        {
          id: 3,
          title: 'mmmmmmmm'
        },
        {
          id: 3,
          title: 'mmmmmmmm'
        }
      ]);
    }




  });
