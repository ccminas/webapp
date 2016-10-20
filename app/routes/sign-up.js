import Ember from 'ember';

export default Ember.Route.extend({
  firebaseApp: Ember.inject.service(),
  notify: Ember.inject.service(),
  beforeModel() {
    if (this.get('session.isAuthenticated')) {
      this.transitionTo('events');
    }
  },

  model() {
    return [];
  },
  actions: {
    signUp(user) {
      debugger;
      this.get('firebaseApp').auth()
        .createUserWithEmailAndPassword(user.email || '', user.password || '')
        .then(() => {
          this.transitionTo('events');
        }).catch((error) => {
          this.get('notify').error('Não foi possível realizar o cadastro.');
          console.log(error);
        });
    }
  }
});
