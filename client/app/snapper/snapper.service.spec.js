'use strict';

describe('Service: snapper', function () {

  // load the service's module
  beforeEach(module('trusteesApp'));

  // instantiate service
  var snapper;
  beforeEach(inject(function (_snapper_) {
    snapper = _snapper_;
  }));

  it('should do something', function () {
    expect(!!snapper).toBe(true);
  });

});
