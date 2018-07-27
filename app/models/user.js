import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    favoriteFood: DS.attr('string'),
    catOrDog: DS.attr('string'),
    numberOfCountriesVisited: DS.attr('number'), 
    usedEmberBefore: DS.attr('boolean'),
    sweetOrSavory: DS.attr('string'),
    dateStartedAtASH:DS.attr('date')
});
