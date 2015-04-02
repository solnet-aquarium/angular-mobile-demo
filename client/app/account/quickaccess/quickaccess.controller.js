'use strict';

angular.module('trusteesApp')
  .controller('QuickaccessCtrl', function ($scope, Auth, $location, $log, $state, $timeout) {


    var self = this;

    $scope.email = undefined;
    $scope.error = undefined;
    $scope.addPinDigit = addPinDigit;
    $scope.clearPin = clearPin;
    $scope.pin = '';

    var supportsVibrate = "vibrate" in navigator;


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
    function addPinDigit(digit){

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

          //TODO should replace quickaccess url history
          //TODO should replace quickaccess url history
          //TODO should replace quickaccess url history
          //TODO should replace quickaccess url history
          //TODO should replace quickaccess url history
          //TODO should replace quickaccess url history


        $timeout(function(){
          window.history.replaceState( {} , 'main', '/' );
        });


        Auth.setQuickAccessUser(undefined);
      })
      .catch( function(err) {
          $log.debug('error logging in');
          addError(err.message);
      });

    }



  });
