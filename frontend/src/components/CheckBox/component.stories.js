import { storiesOf } from '@storybook/vue';

import MyComponent from '.';

storiesOf(MyComponent.name, module)
  .add(`display`, () => ({
    components: { MyComponent },
    data: () => ({
      checkBox01: true,
      checkBox02: false,
      checkBox03: true,
      checkBox04: true,
      checkBox05: true,
      checkBox06: false,
    }),
    template: `
  <div>
     <h4>Show checked. Value: {{ checkBox01 }}</h4>
     <my-component v-model="checkBox01" />
     
     <h4>Show unchecked with autofocus. Value: {{ checkBox02 }}</h4>
     <my-component v-model="checkBox02" autofocus/>
     
     <h4>Slot text and outside text. Value: {{ checkBox03 }}</h4>
     <my-component v-model="checkBox03">
      Slot text.
     </my-component> 
     <span style="color:green">
      After text.
     </span>

     <h4>No tab select. tabindex="-1". Value: {{ checkBox04 }}</h4>
     <my-component v-model="checkBox04" tabindex="-1">
      No focus by Tab
     </my-component> 

     <h4>Disabled checkbox. Value: {{ checkBox05 }}</h4>
     <my-component v-model="checkBox05" disabled>
     disabled checkbox
     </my-component> 
     
     <h4>Disabled checkbox. Value: {{ checkBox06 }}</h4>
     <my-component v-model="checkBox06" disabled>
     disabled checkbox
     </my-component> 

     <hr>
     <span tabindex="0">test focus tab</span>

  </div>`,
  }))
  .add(`tabindex test`, () => ({
    components: { MyComponent },
    template: `
  <div>
    <my-component tabindex=2>Second</my-component>
    </br>
    </br>
    <my-component tabindex=0>Last</my-component>
    </br>
    </br>
    <my-component autofocus tabindex=1>First</my-component>
    </br>
    </br>
    <my-component tabindex=3>Third</my-component>     
  </div>`,
  }));
