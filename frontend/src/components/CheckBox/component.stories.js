import { storiesOf } from '@storybook/vue';

import MyComponent from '.';

storiesOf(MyComponent.name, module).add(`display`, () => ({
  components: { MyComponent },
  data: () => ({
    checkBox01: true,
    checkBox02: false,
    checkBox03: true,
    checkBox04: true,
    checkBox05: true,
  }),
  mounted() {
    this.$refs.first.$el.focus();
  },
  template: `
  <div>
     <h4>checkBox01 {{ checkBox01 }}</h4>
     <my-component v-model="checkBox01"  ref="first"/>
     <h4>checkBox02 {{ checkBox02 }}</h4>
     <my-component v-model="checkBox02"/>
     
     <h4>checkBox03 {{ checkBox03 }}</h4>
     <my-component v-model="checkBox03">
      Slot text.
     </my-component> 
     <span style="color:green">
      After text.
     </span>

     <h4>checkBox04 {{ checkBox04 }}</h4>
     <my-component v-model="checkBox04" tabindex="-1">
      No focus
     </my-component> 

     <h4>checkBox05 {{ checkBox05 }}</h4>
     <my-component v-model="checkBox05" disabled>
     disabled checkbox
     </my-component> 
     
     <hr>
     <span tabindex="0">test focus tab</span>

  </div>`,
}));
