import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  date: DS.attr('date'),
  location: DS.attr('string'),
  description: DS.attr('string'),
  picture: DS.attr('string')
});
