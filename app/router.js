import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('admin');
  this.route('events', function() {
    this.route('new');
    this.route('edit');
  });
});

export default Router;
