import { mount } from '@vue/test-utils';
import CheckBox from '.';

describe(`Component ${CheckBox.name}`, () => {
  test('prop checked', () => {
    const wrapper = mount(CheckBox, {
      propsData: { checked: true },
    });
    const mark = wrapper.find('.mark-position');
    expect(mark.exists()).toBe(true);
  });
});
