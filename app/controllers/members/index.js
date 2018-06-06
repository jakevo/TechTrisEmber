import Controller from '@ember/controller';
import { mapBy, max, filterBy, sort } from '@ember/object/computed';
import EmberObject from '@ember/object';

export default Controller.extend({
    dogList: filterBy('model', 'catOrDog', 'Dog'),
    sortedProperties: ['numberOfCountriesVisited:desc'],
    mostTraveledList: sort('model', 'sortedProperties')
});
