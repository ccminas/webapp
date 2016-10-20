import Ember from 'ember';

export default Ember.Route.extend({
  notify: Ember.inject.service(),
  beforeModel() {
    if (this.get('session.isAuthenticated')) {
      this.transitionTo('events');
    }
  },

  actions: {
    signIn(user) {
      this.get('session').open('firebase', {
        provider: "password",
        email: user.email || '',
        password: user.password || '',
      }).then(() => {
        this.transitionTo('events');
      }).catch((err) => {
        this.get('notify').error('E-mail ou senha inválidos');
        console.log(err);
      });
    }
  }
});
