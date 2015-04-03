'use strict';

angular.module('trusteesApp')
  .controller('QuickaccessCtrl', function ($scope, Auth, $location, $log, $state, $timeout, $rootScope, $window) {


    var self = this;

    $scope.email = undefined;
    $scope.error = undefined;
    $scope.clearPin = _.debounce(clearPin, 60, true);
    $scope.back = _.debounce(back, 50, true);
    $scope.pin = '';

    $scope.throttlePinDigit = _.debounce(addPinDigit, 30, true);

    var supportsVibrate = 'vibrate' in navigator;

    return init();


    /**
     *
     */
    function init(){
      $scope.email = Auth.getQuickAccessUser();

      if(!$scope.email){
        $state.go('login');
      }
    }

    /**
     *
     */
    function clearPin(){
      $scope.pin = '';

    }

    function clearError(){
      $scope.error = undefined;
    }

    function addError(error){
      $scope.error = error;
      $timeout(function(){
        clearError();
        clearPin();
      }, 500);
    }

    /**
     *
     */
    function back(){
      $log.debug('quick access ctrl back');

      $window.history.back();
    }

    /**
     *
     */
    function addPinDigit(digit){

      $log.debug('adding pin digit');

      if($scope.pin.length > 4){
        return;
      }

      if(supportsVibrate){
        navigator.vibrate(50);
      }

      $scope.pin = $scope.pin.concat(digit);

      if($scope.pin.length === 4){
        login($scope.email, $scope.pin);
      }

    }


    /**
     *
     */
    function login(email, pin){

      Auth.login({
        email: email,
        password: pin
      })
      .then( function() {
        // Logged in, redirect to home

        $timeout(function(){
          window.history.replaceState( {} , 'main', '/' );
        });

        $rootScope.temporaryLoginUser = undefined;

        Auth.setQuickAccessUser(undefined);
      })
      .catch( function(err) {
          $log.debug('error logging in');
          addError(err.message);
      });

    }



  });
