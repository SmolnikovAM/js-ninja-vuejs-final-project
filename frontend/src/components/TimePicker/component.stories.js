import { storiesOf } from '@storybook/vue';

import MyComponent from '.';

storiesOf(MyComponent.name, module).add(
  `display "${MyComponent.name}"`,
  () => ({
    components: { MyComponent },
    template: `<div><my-component/></div>`,
  }),
);
