import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | user-card', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    const user = {
      id: 1,
      name: 'Justin',
      favoriteFood: 'Sushi',
      catOrDog: 'Dog',
      numberOfCountriesVisited: 10,
      usedEmberBefore: false,
      sweetOrSavory: 'Savory',
      dateStartedAtASH: '05/09/2005',
    }
    
    let Component = this.owner.factoryFor('component: user-card')
    this.set('fakeUser', user)

    await render(hbs`{{user-card user=fakeUser}}`);
    assert.equal(this.element.querySelector('b').textContent.trim(), 'Justin');

    this.set('fakeUser.name', '');
    assert.equal(this.element.querySelector('b').textContent.trim(), 'Toan');

    assert.equal(this.element.querySelector('b').textContent.trim(), '');

    
    
  });
});
