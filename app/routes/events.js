import Ember from 'ember';

export default Ember.Route.extend({
  moment: Ember.inject.service(),

  model() {
    return this.store.findAll('event');
  }



});
