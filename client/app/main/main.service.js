'use strict';

angular.module('trusteesApp')
  .service('main', function ($q, Logger) {


    var self = this;

    var logger = Logger.getLogger('main.service');


    self.getMainItems = getMainItems;

    return self;


    /**
     *
     */
    function getMainItems(){
      return $q.when(
        [{
          name: 'Accounts',
          state: 'accounts',
          icon: 'fa-list'
        },
        {
          name: 'Settings',
          state: 'settings',
          icon: 'fa-cog'
        }]

      );
    }

  });
