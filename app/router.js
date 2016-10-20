import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.authenticatedRoute('admin');
  this.authenticatedRoute('events', function () {
    this.authenticatedRoute('event', {path: ':event_id'}, function () {
      this.authenticatedRoute('show');
      this.authenticatedRoute('edit');
    });
    this.authenticatedRoute('new');
  });
  this.route('blog');
  this.route('sign-up');
  this.route('sign-in');
});

export default Router;
