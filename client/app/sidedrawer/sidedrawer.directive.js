'use strict';

angular.module('trusteesApp')
  .directive('sidedrawer', function (Logger, $mdSidenav, $rootScope, $timeout) {
    return {
      templateUrl: 'app/sidedrawer/sidedrawer.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {

        var logger = Logger.getLogger('sidedrawer:directive');


        logger.debug('sidedrawer:directive link');

        scope.items = [
          {
            name: 'Home',
            state: 'main',
            icon: 'fa-home'
          },
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
        function closeDrawer(action){

          //delay for button animation
          $timeout(function(){
            $mdSidenav('right').close();
            //delay for animation close
            $timeout(function(){
              action();
            }, 175);
          }, 100)

        }

        /**
         *
         */
        function navigateFromDrawer(state){
          closeDrawer(function(){
            $rootScope.navigateTo(state);
          });
        }

        /**
         *
         */
        function logoutFromDrawer(){
          closeDrawer(function() {
            $rootScope.logout();
          });
        }


      }
    };
  });
