import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    deleteEvent(event) {
      event.destroyRecord().then(() => {
        this.transitionTo('events');
      });
    }
  }
});
