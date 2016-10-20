import Ember from 'ember';

export default Ember.Component.extend({
    actions:{
        userAction(){
            let user = {
                'email': this.get('email'),
                'password': this.get('password')
            };
            this.get("action")(user);
        }
    }
});
