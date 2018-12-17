import { mount } from '@vue/test-utils';
import CheckBox from '.';

describe(`Component ${CheckBox.name}`, () => {
  test('Prop checked true', () => {
    const wrapper = mount(CheckBox, {
      propsData: { checked: true },
    });
    const mark = wrapper.find('.mark-position');
    expect(mark.exists()).toBe(true);
  });

  test.skip('Prop checked false', () => {});
  test.skip('Change prop checked', () => {});
  test.skip('Slot text render', () => {});
  test.skip('Click on checkbox(label). Prop checked change', () => {});
  test.skip('Click on checkbox(span). Prop checked change', () => {});
  test.skip('Click on disabled checkbox(label). Prop checked not change', () => {});
  test.skip('Disabled checkbox has special classes', () => {});
  test.skip('Autofocus on start', () => {});
  test.skip('Focus by Tab', () => {});
});
