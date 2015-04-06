'use strict';

angular.module('trusteesApp')
  .config(function ($stateProvider) {
    $stateProvider


      .state('login', {
        navigationTitle: 'Trustees',
        url: '/login',
        enableMenuButton: false,
        templateUrl: 'app/account/login/login.html',
        controller: 'LoginCtrl'
      })

      .state('quickaccess', {
        url: '/quickaccess',
        enableMenuButton: false,
        templateUrl: 'app/account/quickaccess/quickaccess.html',
        controller: 'QuickaccessCtrl',
        resolve: {
          ensureHaveUserEmail: function($q, Auth, $location){

            //TODO
            if(Auth.getQuickAccessUser()){
              return $q.when();
            }
            else{
              $location.path('/login');
            }

          }
        }
      })


      .state('settings', {
        url: '/settings',
        navigationTitle: 'Settings',
        enableMenuButton: true,
        enableBackButton: true,
        templateUrl: 'app/account/settings/settings.html',
        controller: 'SettingsCtrl',
        authenticate: true
      });
  });
