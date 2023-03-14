import { modifier } from 'ember-modifier';

export default modifier(function addHelloClass(/*element, params, hash*/) {
  document.body.classList.add('hello');

  return () => {
    document.body.classList.remove('hello');
  };
});
