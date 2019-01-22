import { mount } from '@vue/test-utils';
import DayOfWeek from '.';

describe(`Component ${DayOfWeek.name}`, () => {
  test('check time', () => {
    const wrapper = mount(DayOfWeek);
    expect(wrapper.text()).toBe('');

    let date = new Date(2018, 11, 23, 1, 1);
    wrapper.setProps({ date });
    expect(wrapper.text()).toBe('1:01 AM');

    date = new Date(2018, 11, 23, 12, 0);
    wrapper.setProps({ date });
    expect(wrapper.text()).toBe('12:00 AM');

    date = new Date(2018, 11, 23, 23, 8);
    wrapper.setProps({ date });
    expect(wrapper.text()).toBe('11:08 PM');

    date = new Date(2018, 11, 23, 17, 17);
    wrapper.setProps({ date });
    expect(wrapper.text()).toBe('5:17 PM');

    date = new Date(2018, 11, 23, 16, 1);
    wrapper.setProps({ date });
    expect(wrapper.text()).toBe('4:01 PM');
  });
});
