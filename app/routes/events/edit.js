import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('event', params.event_id);
  },

  saveEvent(newEvent) {
    newEvent.save().then(() => this.transitionTo('events'));
  },

});
