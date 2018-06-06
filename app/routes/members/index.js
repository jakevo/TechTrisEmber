import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
    model() {
        const users = [
            {
                id: 1,
                name: 'Justin',
                favoriteFood: 'Sushi',
                catOrDog: 'Dog',
                numberOfCountriesVisited: 10,
                usedEmberBefore: false,
                sweetOrSavory: 'Savory',
                dateStartedAtASH: '05/09/2005',
            },
            {
                id: 2,
                name: 'Jeffrey',
                favoriteFood: 'Asian Food',
                catOrDog: 'Cat',
                numberOfCountriesVisited: 3,
                usedEmberBefore: true,
                sweetOrSavory: 'Savory',
                dateStartedAtASH: '10/2017',
            },
            {
                id: 3,
                name: 'Anthony',
                favoriteFood: 'Cheeseburgers',
                catOrDog: 'Dog',
                numberOfCountriesVisited: 6,
                usedEmberBefore: true,
                sweetOrSavory: 'Sweet',
                dateStartedAtASH: '01/2012',
            },
            {
                id: 4,
                name: 'Jake Vo',
                favoriteFood: 'Pho',
                catOrDog: 'Dog',
                numberOfCountriesVisited: 3,
                usedEmberBefore: true,
                sweetOrSavory: 'Sweet',
                dateStartedAtASH: '10/2017'
            },
            {
                id: 5,
                name: 'Doug Wenz',
                favoriteFood: 'Whatever tastes like freedom',
                catOrDog: 'None',
                numberOfCountriesVisited: 0,
                usedEmberBefore: true,
                sweetOrSavory: 'Neither',
                dateStartedAtASH: '10/2017'
            },
            {
                id: 6,
                name: 'Neha',
                favoriteFood: 'Indian',
                catOrDog: 'Dog',
                numberOfCountriesVisited: 4,
                usedEmberBefore: false,
                sweetOrSavory: 'None',
                dateStartedAtASH: '11/2017'
            },
            {
                id: 7,
                name: 'Prashant Luthra',
                favoriteFood: 'Indian',
                catOrDog: 'None',
                numberOfCountriesVisited: 1,
                usedEmberBefore: false,
                sweetOrSavory: 'Sweet',
                dateStartedAtASH: '11/2017'
            },
            {
                id: 8,
                name: 'Daniel Chang',
                favoriteFood: 'pizza',
                catOrDog: 'cat',
                numberOfCountriesVisited: 12,
                usedEmberBefore: false,
                sweetOrSavory: 'Sweet',
                dateStartedAtASH: '09/2017',
            },
            {
                id: 9,
                name: 'Maggie',
                favoriteFood: 'Steak',
                catOrDog: 'Dog',
                numberOfCountriesVisited: 15,
                usedEmberBefore: true,
                sweetOrSavory: 'Savory',
                dateStartedAtASH: '01/2018',
            },
        ];
        return users;

        // return RSVP.hash({
        //     people: users,
        //     posts: [1,2,3]
        // })
    }
});
