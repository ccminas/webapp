import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel() {
    this.get('session').fetch().then(()=>{
      this.transitionTo('events');
    }).catch((err) => {
      this.transitionTo('sign-in');
    });
  },
});
