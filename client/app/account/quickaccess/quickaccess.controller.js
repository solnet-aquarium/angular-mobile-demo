'use strict';

if (!angular.module('trusteesApp')
    .controller('QuickaccessCtrl', function ($scope, Auth, $location, Logger, $state, $timeout, $rootScope, $window) {


      var self = this;

      var logger = Logger.getLogger($scope.controllerName);

      $scope.email = undefined;
      $scope.error = undefined;
      $scope.success = undefined;
      $scope.active = undefined;

      $scope.clearPin = _.debounce(clearPin, 20, true);
      $scope.back = _.debounce(back, 20, true);

      $scope.pin = '';
      $scope.throttlePinDigit = _.debounce(addPinDigit, 20, true);

      var supportsVibrate = 'vibrate' in navigator;

      return init();


      /**
       *
       */
      function init() {
        $scope.email = Auth.getQuickAccessUser();

        //delay the displaying of the pin panel by an unnoticable amount
        //    was seeing the view flash in on ios - not applying translate animation styling fast enough?
        $timeout(function () {
          $scope.active = true;
        }, 50);

        if (!$scope.email) {
          $state.go('login');
        }
      }

      /**
       *
       */
      function clearPin($event) {
        $scope.pin = '';

      }

      function clearError() {
        $scope.error = undefined;
      }

      function addError(error) {

        if (supportsVibrate) {
          navigator.vibrate(150);
        }

        $scope.error = error;
        $timeout(function () {
          if ($scope.error) {
            clearError();
            clearPin();
          }
        }, 500);
      }

      /**
       *
       */
      function back($event) {
        logger.debug('quick access ctrl back');

        $window.history.back();
      }

      /**
       *
       */
      function addPinDigit(digit) {

        logger.debug('adding pin digit', digit);

        if ($scope.pin.length > 4) {
          if ($scope.error) {
            clearError();
            clearPin();
          }
          else {
            return;
          }
        }

        if (supportsVibrate) {
          navigator.vibrate(50);
        }

        $scope.pin = $scope.pin.concat(digit);

        if ($scope.pin.length === 4) {
          login($scope.email, $scope.pin);
        }

      }


      /**
       *
       */
      function login(email, pin) {

        Auth.login({
          email: email,
          password: pin
        })
          .then(function () {
            // Logged in, redirect to home
            $scope.success = true;
            $timeout(function () {
              window.history.replaceState({}, 'main', '/');
            });

            //TODO duplicate???
            $rootScope.temporaryLoginUser = undefined;
            Auth.setQuickAccessUser(undefined);
          })
          .catch(function (err) {
            logger.debug('error logging in');
            addError(err.message);
          });

      }


    })) {

}
