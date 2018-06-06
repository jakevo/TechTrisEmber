import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('members', function() {
    this.route('member', {path: 'member/:id'});
  });
});

export default Router;
