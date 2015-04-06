'use strict';

angular.module('trusteesApp')
  .directive('sidedrawer', function (Logger, $mdSidenav, $rootScope) {
    return {
      templateUrl: 'app/sidedrawer/sidedrawer.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {

        var logger = Logger.getLogger('sidedrawer:directive');


        logger.debug('sidedrawer:directive link');

        scope.items = [
          {
            name: 'Accounts',
            state: 'accounts',
            icon: 'fa-list'
          },
          {
            name: 'Settings',
            state: 'settings',
            icon: 'fa-cog'
          }
        ];

        scope.logoutFromDrawer = logoutFromDrawer;
        scope.navigateFromDrawer = navigateFromDrawer;

        return;

        /**
         *
         */
        function closeDrawer(){
          $mdSidenav('right').close();
        }

        /**
         *
         */
        function navigateFromDrawer(state){
          closeDrawer();
          $rootScope.navigateTo(state);
        }

        /**
         *
         */
        function logoutFromDrawer(){
          closeDrawer();
          $rootScope.logout();
        }


      }
    };
  });
