import Ember from 'ember';

export default Ember.Route.extend({
  model(){
      return this.get('store').findAll('event');
  },
  setupController(controller, model){
    this._super(controller, model);
    this.controllerFor('application').set('activeEvent', model.get('firstObject'));
  },
  actions: {
    signOut() {
      this.transitionTo('/');
      this.get('session').close();
    },

    accessDenied() {
      this.transitionTo('sign-in');
    }
  }
});
