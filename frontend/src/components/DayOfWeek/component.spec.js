import { mount } from '@vue/test-utils';
import DayOfWeek from '.';

describe(`Component ${DayOfWeek.name}`, () => {
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  test('check all days', () => {
    const wrapper = mount(DayOfWeek);
    for (let i = 0; i <= 6; i += 1) {
      const date = new Date(2018, 11, 23 + i); // month starts from 0
      wrapper.setProps({ date });
      expect(wrapper.text()).toBe(days[i % 7]);
      expect(date.getDay()).toBe(i % 7);
    }
  });

  test('check date array', () => {
    for (let i = 0; i <= 6; i += 1) {
      const date = [2018, 12, 23 + i]; // month starts from 1
      const wrapper = mount(DayOfWeek, { propsData: { date } });
      expect(new Date(date).getDay()).toBe(i % 7);
      expect(wrapper.text()).toBe(days[i % 7]);
    }
  });

  test('check date string', () => {
    for (let i = 0; i <= 6; i += 1) {
      const date = `2018-12-${23 + i}`;
      const wrapper = mount(DayOfWeek, { propsData: { date } });
      expect(new Date(date).getDay()).toBe(i % 7);
      expect(wrapper.text()).toBe(days[i % 7]);
    }
  });

  test('check date string', () => {
    for (let i = 0; i <= 6; i += 1) {
      let date = days[i % 7];
      const wrapper = mount(DayOfWeek, { propsData: { date } });
      expect(wrapper.text()).toBe(date);
      wrapper.setProps({ date: date.toLowerCase() });
      expect(wrapper.text()).toBe(date.toUpperCase());
    }
  });

  test('bad string', () => {
    let date = 'asdfasdf';
    const wrapper = mount(DayOfWeek, { propsData: { date } });
    expect(wrapper.text()).toBe('');
  });

  test('no date input', () => {
    const wrapper = mount(DayOfWeek);
    expect(wrapper.text()).toBe('');
  });
});
