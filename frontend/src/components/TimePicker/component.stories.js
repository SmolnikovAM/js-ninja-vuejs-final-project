import { storiesOf } from '@storybook/vue';

import MyComponent from '.';

storiesOf(MyComponent.name, module).add(
  `display "${MyComponent.name}"`,
  () => ({
    components: { MyComponent },
    data: () => ({
      date: new Date(2018, 11, 25, 13, 2), // 13:02
      style: 'padding: 10px; margin: 10px; border: 1px solid black;',
    }),
    template: `
    <div>
      <div :style="style">
        show time "new Date(2018, 11, 25, 13, 2)": <br><br>
         <my-component :date="date"/>
      </div>      
    </div>`,
  }),
);
