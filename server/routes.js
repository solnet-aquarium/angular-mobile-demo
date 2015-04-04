/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var config = require('./config/environment');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/things', require('./api/thing'));
  app.use('/api/users', require('./api/user'));

  app.use('/auth', require('./auth'));

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.jade
  app.route('/*')
    .get(function(req, res) {

      //calculate the index path depending on if it is an absolute path or not - assuming a unix based system
      var path;
      if(app.get('appPath')[0] === '/'){
        path = app.get('appPath') + '/index.jade';
      }
      else{
        path = '../../' + app.get('appPath') + '/index.jade';
      }

      res.render(path, config);

    });
};
