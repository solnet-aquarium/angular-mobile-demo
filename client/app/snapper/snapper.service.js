'use strict';

angular.module('trusteesApp')
  .service('snapper', function ($log, $rootScope) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var self = this;

    self.openRightSideDrawer = openRightSideDrawer;
    self.closeRightSideDrawer = closeRightSideDrawer;
    self.toggleRightSideDrawer = toggleRightSideDrawer;


    return self;

    /**
     *
     */
    function openRightSideDrawer(){
      $rootScope.$emit('snap:right:open');
      $log.debug('event - snap:right:open');
    }

    /**
     *
     */
    function toggleRightSideDrawer(){
      $rootScope.$emit('snap:right:toggle');
      $log.debug('event - snap:right:toggle');
    }


    /**
     *
     */
    function closeRightSideDrawer(){
      $rootScope.$emit('snap:right:close');
      $log.debug('event - snap:right:close');
    }

  });
