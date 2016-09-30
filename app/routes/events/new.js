import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('event');
  },

  actions: {
    saveEvent(newEvent) {
      console.log("New event");
      //newEvent.save().then(() => this.transitionTo('events'));
    }
  }
});
