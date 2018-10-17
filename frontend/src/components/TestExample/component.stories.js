// eslint-disable-next-line
import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

// eslint-disable-next-line
import Component from '.';

storiesOf(Component.name, module).add(`display "${Component.name}"`, () => ({
  components: { [Component.name]: Component },
  data: () => ({
    //  data
    style: {
      border: '1px solid black',
      display: 'inline-block',
    },
  }),
  methods: {},
  template: `
  <div>
      <test-example name="test">
        <div slot="content">
          <div :style="style"> inside slot div</div>
        </div>
      </test-example>
  </div>
  `,
}));
