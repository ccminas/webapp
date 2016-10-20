import Ember from 'ember';

export default Ember.Route.extend({
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
