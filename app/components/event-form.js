import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveEvent() {
      let newEvent = {
        id: this.get('model.id'),
        name: this.get('model.name'),
        date: this.get('model.date'),
        location: this.get('model.location'),
        description: this.get('model.description'),
        picture: this.get('model.picture')
      };

      this.get("save")(newEvent);
    }
  }
});
