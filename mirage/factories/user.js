import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
    name (i){
        return faker.list.cycle('Justin', 'Jeffrey','Anthony', 'Jake Vo', 'Doug Wenz', 'Neha', 'Prashant Luthra', 'Daniel Chang', 'Maggie')(i);
    },
    favoriteFood (i) {
        return faker.list.cycle('Sushi', 'Asian Food','Cheeseburgers', 'Pho','sugar-free', 'Indian', 'Pizza', 'Steak')(i);
    },
    catOrDog(i) {
        return faker.list.cycle('None', 'Cat','Dog')(i);
    },
    numberOfCountriesVisited(i) {
        return faker.random.number({'min':0, 'max':100});
    },
    usedEmberBefore(i) {
        return faker.list.cycle(true, false)(i)
    }, 
    dateStartedAtASH(i){
        return faker.date.between('1970-01-01', '2017-12-31')
    }
});
