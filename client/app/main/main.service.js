'use strict';

angular.module('trusteesApp')
  .service('main', function ($q, $log) {

    var self = this;

    self.getMainItems = getMainItems;

    return self;


    /**
     *
     */
    function getMainItems(){
      return $q.when(
        [{
          name: 'Accounts',
          state: 'accounts'
        },
        {
          name: 'Settings',
          state: 'settings'
        }]

      );
    }

  });
