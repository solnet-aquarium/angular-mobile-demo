'use strict';

angular.module('trusteesApp')
  .directive('snapper', function ($timeout, $log, $rootScope) {
    return {
      template: '<div class="snap-content" ng-transclude=""></div>',
      replace: true,
      transclude: true,
      restrict: 'A',
      link: function (scope, element, attrs) {

        scope.snapper = undefined;
        scope.openRight = false;


        $log.debug(attrs.snapper);

        var openHandle = $rootScope.$on('snap:right:open', openRightSideDrawer);
        var closeHandle = $rootScope.$on('snap:right:close', closeRightSideDrawer);
        var toggleHandle = $rootScope.$on('snap:right:toggle', toggleRightSideDrawer);

        scope.$on('$destroy', function(){

          openHandle();
          closeHandle();
          toggleHandle();

        });

        return init();


        /**
         *
         */
        function init(){
          return $timeout(function(){
            scope.snapper = new Snap({
              element: element[0],
              dragger: null,
              disable: 'left',
              addBodyClasses: true,
              hyperextensible: true,
              resistance: 0.5,
              flickThreshold: 50,
              transitionSpeed: 0.3,
              easing: 'ease',
              maxPosition: 266,
              minPosition: -266,
              tapToClose: false,
              touchToDrag: false,
              slideIntent: 40,
              minDragDistance: 5
            });
          });
        }

        /**
         *
         * @param event
         */
        function closeRightSideDrawerOnContentClick(event){

          event.preventDefault();
          $timeout(closeRightSideDrawer, 20);


        }


        /**
         *
         */
        function toggleRightSideDrawer(){
          $log.debug('toggle right side', scope.snapper.state());
          if( scope.snapper.state().state === 'right' ){
            closeRightSideDrawer();
          } else {
            openRightSideDrawer();
          }

        }


        /**
         *
         */
        function openRightSideDrawer(){

          //TODO detect and hijack backbutton - in backbutton service?

          scope.openRight = true;
          scope.snapper.open('right');

          $timeout(function(){
            $('.snap-content').one('click', closeRightSideDrawerOnContentClick);
          });


        }



        /**
         *
         */
        function closeRightSideDrawer(){

          scope.openRight = false;

          //removing at the wrong point
          $('body.snapjs-right').removeClass('snapjs-right');

          scope.snapper.close();
          $('.snap-content').off('click', closeRightSideDrawerOnContentClick);

        }


      }
    };
  });
