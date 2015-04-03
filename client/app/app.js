'use strict';

angular.module('trusteesApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngAnimate',
  'btford.socket-io',
  'ngMaterial',
  'ui.router'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $provide) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('authInterceptor');


    //decorate all states so they resolve their transition class name before attempting to animate views
    //      need this to target individual transitions between two specific pages rather than always
    //      executing it on every page
    $stateProvider.decorator('data', function (state, parent) {
      state.resolve.resolvePageTransitionClasses = ['$rootScope', '$q', function($rootScope, $q){
        return $rootScope.resolveTransitionClasses();
      }];
      return parent(state);
    });

    $provide.decorator('$controller', [
      '$delegate',
      function ($delegate) {
        return function(constructor, locals, later, indent) {
          if (typeof constructor === 'string') {
            locals.$scope.controllerName =  constructor;
          }
          return $delegate(constructor, locals, later, indent);
        };
      }]);

  })

  .factory('authInterceptor', function ($rootScope, $q, $cookieStore, $location) {
    return {
      // Add authorization token to headers
      request: function (config) {
        config.headers = config.headers || {};
        if ($cookieStore.get('token')) {
          config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
        }
        return config;
      },

      // Intercept 401s and redirect you to login
      responseError: function(response) {
        if(response.status === 401) {
          if ($cookieStore.get('token')) {
            $location.path('/login');
            // remove any stale tokens
            $cookieStore.remove('token');
          }
          return $q.reject(response);
        }
        else {
          return $q.reject(response);
        }
      }
    };
  })



  .run(function ($rootScope, $location, Auth, $state, $log, $timeout, $q) {


    FastClick.attach(document.body);



    var resolveTransitionClassesDeferred;

    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {

      resolveTransitionClassesDeferred = $q.defer();

      checkAuthOnStateChange(event, toState, toParams, fromState, fromParams);
      updatePageTransitionClasses(event, toState, toParams, fromState, fromParams);
    });


    function checkAuthOnStateChange(event, toState, toParams, fromState, fromParams){
      Auth.isLoggedInAsync(function(loggedIn) {
        if (toState.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
    }


    function updatePageTransitionClasses(event, toState, toParams, fromState, fromParams){

      $rootScope.pageTransitionFromClass = 'transitionFrom' + fromState.name;
      $rootScope.pageTransitionToClass = 'transitionTo' + toState.name;


      requestAnimationFrame(function ensureClassExists(){
        if($('body.' + 'transitionFrom' + fromState.name).length){
          $timeout(function(){
            resolveTransitionClassesDeferred.resolve();
          });
        }
        else{
          requestAnimationFrame(ensureClassExists);
        }
      });
    }


    $rootScope.resolveTransitionClasses = function(){
      return resolveTransitionClassesDeferred.promise;
    };





  });
