import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    editEvent(editedEvent) {

      this.get('store').findRecord('event', editedEvent.id).then((event) => {
          event.set('name', editedEvent.name);
          event.set('date', editedEvent.date);
          event.set('description', editedEvent.description);
          event.set('picture', editedEvent.picture);
          event.save().then(() => this.transitionTo('events.event.show', event));
        }

    ).catch((err) => {
        console.log("Erro ao salvar evento");
    });
    }
  }
});
