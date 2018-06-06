import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Component | user-card', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {

    const fakeUser = {
      id: 1,
      name: 'Justin',
      favoriteFood: 'Sushi',
      catOrDog: 'Dog',
      numberOfCountriesVisited: 10,
      usedEmberBefore: false,
      sweetOrSavory: 'Savory',
      dateStartedAtASH: '05/09/2005',
    }
    
    let component = this.owner.factoryFor('component:user-card').create();
    component.set('user', fakeUser);

    assert.equal(component.get('isRookie'), false, 'not used, but name justin should be false');


    
  });
});
