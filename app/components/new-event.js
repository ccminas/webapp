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
    saveEvent() {
      console.log("Componente");


      console.log(this.get('eventName'));
      var newEvent = {
        name: this.get('eventName'),
        date: this.get('eventDate'),
        description: this.get('eventDescription'),
        picture_url: this.get('eventImage')
      };

      console.log(newEvent);

      this.get('save')(newEvent);
    }
  }
});
