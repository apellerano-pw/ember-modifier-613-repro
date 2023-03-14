import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { clearRender, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Modifier | add-hello-class', function (hooks) {
  setupRenderingTest(hooks);

  test('it never calls the destructor', async function (assert) {
    this.set('enabled', false);
    await render(hbs`
      <div {{(if this.enabled (modifier 'add-hello-class'))}}>
        qwerty
      </div>
    `);
    this.set('enabled', true);
    assert.true(document.body.classList.contains('hello'));
    await clearRender();
    assert.false(document.body.classList.contains('hello'));
  });

  test('it calls the destructor', async function (assert) {
    this.set('enabled', false);
    await render(hbs`
      <div {{(modifier 'add-hello-class')}}>
        qwerty
      </div>
    `);
    this.set('enabled', true);
    assert.true(document.body.classList.contains('hello'));
    await clearRender();
    assert.false(document.body.classList.contains('hello'));
  });
});
