'use strict';

describe('Directive: menudrawer', function () {

  // load the directive's module and view
  beforeEach(module('trusteesApp'));
  beforeEach(module('app/menudrawer/menudrawer.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<menudrawer></menudrawer>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the menudrawer directive');
  }));
});