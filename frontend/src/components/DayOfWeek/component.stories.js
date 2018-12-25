import { storiesOf } from '@storybook/vue';

import MyComponent from '.';

storiesOf(MyComponent.name, module)
  .add(`display "${MyComponent.name}"`, () => ({
    components: { MyComponent },
    data: () => ({
      today: new Date(),
      arrayTue: [2018, 11, 25],
      stringWed: '2018-12-26',
      todayFromNumber: Date.now(),
      style: 'padding: 10px; margin: 10px; border: 1px solid black;',
    }),
    template: `
    <div>
      <div :style="style">
       Simple display of "SUN"
       <br>
       <br>
       <my-component date="SUN"/>
      </div>
      <div :style="style">
        Today from date: <my-component :date="today"/>
      </div>
      <div :style="style">
        Today From Number: <my-component :date="todayFromNumber"/>
      </div>
      <div :style="style">
        Array: <my-component :date="arrayTue"/>
      </div>
      <div :style="style">
        From string: <my-component :date="stringWed"/>
      </div>
    </div>`,
  }))
  .add(`customize style "${MyComponent.name}"`, () => {
    const style = document.createElement('style');
    const red = `component-class-${MyComponent.name}-red`;
    const green = `component-class-${MyComponent.name}-green`;
    style.innerHTML = `
      .${red}{ color: red }
      .${green}{ color: green }'
    `;
    document.body.appendChild(style);
    return {
      components: { MyComponent },
      data: () => ({
        today: new Date(),
        color: red,
      }),
      computed: {
        componentClass() {
          return this.color ? { [this.color]: true } : {};
        },
      },
      template: `
  <div>
    <my-component date="SUN" :class="componentClass"/>
    <br><br>
    color 
    <select v-model="color">
      <option value="${red}">red</option>
      <option value="${green}">green</option>  
    </select>
  </div>`,
    };
  });
