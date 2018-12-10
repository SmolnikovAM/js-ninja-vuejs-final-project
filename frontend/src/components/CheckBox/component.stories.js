import { storiesOf } from '@storybook/vue';

import Component from '.';

storiesOf(Component.name, module)
  .add(`display`, () => ({
    components: { Component },
    template: `<div><component/></div>`,
  }))
  .add(`states`, () => ({
    components: { Component },
    data: () => ({
      checkBox01: true,
      checkBox02: false,
    }),
    template: `
  <div>
     <h4>checkBox01 {{ checkBox01 }}</h4>
     <component v-model="checkBox01"/>
     <h4>checkBox02 {{ checkBox02 }}</h4>
     <component v-model="checkBox01"/>
  </div>`,
  }));
