import Ember from 'ember';

export default Ember.Component.extend({
  eventName: '',
  eventDate: '',
  eventDescription: '',
  eventNameIsValid: Ember.computed.gte('eventName.length', 4),
  eventDateIsValid: Ember.computed.empty('eventDate'),
  eventDescriptionIsValid: Ember.computed.gte('eventDescription.length', 5),
  isDisabled: Ember.computed.empty('eventName') && Ember.computed.empty('eventDate') && Ember.computed.empty('eventDescription'),

  actions: {
    saveEvent(newEvent) {
      console.log("salvar evento componente");
    }
  }
});
