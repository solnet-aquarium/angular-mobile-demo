'use strict';

angular.module('trusteesApp')
  .directive('menudrawer', function (Auth, $state, $timeout, snapper) {
    return {
      templateUrl: 'app/menudrawer/menudrawer.html',
      replace: true,
      restrict: 'A',
      link: function (scope, element, attrs) {


        scope.items = [
          {
            name: 'Settings',
            state: 'settings'
          }
        ];


        scope.logout = logout;

        scope.clickItemState = clickItemState;


        return;

        /**
         *
         */
        function clickItemState(state){

          snapper.closeRightSideDrawer();

          $timeout(function(){
            $state.go(state);
          });
        }

        /**
         *
         */
        function logout(){
          Auth.logout();

          snapper.closeRightSideDrawer();

          $timeout(function(){
            $state.go('login');
          });

        }

      }
    };
  });
