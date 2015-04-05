'use strict';

angular.module('trusteesApp')
  .controller('SettingsCtrl', function ($scope, User, Auth, $timeout) {

    $scope.errors = {};

    $scope.active = undefined;

    $scope.changePassword = changePassword;


    return init();


    /**
     *
     */
    function init(){
      $timeout(function(){
        $scope.active = true;
      }, 100);
    }

    /**
     *
     * @param form
     */
    function changePassword(form) {

      $scope.submitted = true;

      if(form.$valid) {
        Auth.changePassword( $scope.user.oldPassword, $scope.user.newPassword )
        .then( function() {
          $scope.message = 'Password successfully changed.';
        })
        .catch( function() {
          form.password.$setValidity('mongoose', false);
          $scope.errors.other = 'Incorrect password';
          $scope.message = '';
        });
      }
		}


    
  });
