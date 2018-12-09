import { storiesOf } from '@storybook/vue';

import Component from '.';

storiesOf(Component.name, module).add(`display "${Component.name}"`, () => ({
  components: { Component },
  template: `<div><component/></div>`,
}));
// .add('additional story',() => ({
//   components: { [Component.name]: Component },
//   data: () => ({}),
//   methods: {},
//   template: `<div><check-box/></div>`,
// }));
