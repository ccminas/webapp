import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return [];
    },
    actions: {
        saveEvent(newEvent){
            debugger;
            this.get('store').createRecord('event', newEvent).save().then(() => {
                this.transitionTo('events.event.show', newEvent);
            });
        }
    }
});
