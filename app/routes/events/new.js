import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveEvent(event) {
      console.log("New event");


      const newEvent = this.store.createRecord('event', event);

      newEvent.save().then(() => this.transitionTo('events'));
    }
  }
});
