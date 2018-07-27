import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import EmberObject from '@ember/object';
import {run} from '@ember/runloop';

module('Unit | Component | user-card', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const FakeUser = EmberObject.extend({
      id:1,
      name:  'Justin',
      favoriteFood: 'Sushi',
      catOrDog: 'Dog',
      numberOfCountriesVisited: 10,
      usedEmberBefore: false,
      sweetOrSavory: 'Savory',
      dateStartedAtASH: '05/09/2005',
    });

    const fakeUser = FakeUser.create();
    let component = this.owner.factoryFor('component:user-card').create();
    component.set('user', fakeUser);
    
    assert.equal(component.get('isRookie'), false, 'Not used, but name justin should be false');

    run(function(){
      fakeUser.set('name', 'Toan');
    });
    
  
    assert.equal(component.get('isRookie'), true, 'Not used, but name Not justin should be true');
   

  });
});