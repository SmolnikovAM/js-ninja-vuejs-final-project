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

  test('Prop checked false', () => {
    const wrapper = mount(CheckBox, {
      propsData: { checked: false },
    });
    const mark = wrapper.find('.mark-position');
    expect(mark.exists()).toBe(false);
  });

  test('Change prop checked', () => {
    const wrapper = mount(CheckBox, {
      propsData: { checked: false },
    });
    let mark = wrapper.find('.mark-position');
    expect(mark.exists()).toBe(false);
    wrapper.setProps({ checked: true });
    mark = wrapper.find('.mark-position');
    expect(mark.exists()).toBe(true);
  });

  test('Slot text render', () => {
    const slotText = 'test';
    const wrapper = mount(CheckBox, {
      slots: {
        default: [slotText],
      },
    });
    expect(wrapper.text()).toMatch(slotText);
  });

  test('Click on checkbox(label). Prop checked change', () => {
    const wrapper = mount(CheckBox, {
      propsData: { checked: true },
    });
    const stub = jest.fn();
    const label = wrapper.find('.label-position');
    wrapper.vm.$on('change', stub);
    label.trigger('click');
    expect(stub).toHaveBeenCalledTimes(1);
    expect(stub).toBeCalledWith(false);
  });

  test.skip('Click on checkbox(span). Prop checked change', () => {
    // this is JSDOM bug
    // https://github.com/jsdom/jsdom/issues/1614
    const wrapper = mount(CheckBox, {
      propsData: { checked: true },
    });
    const stub = jest.fn();
    const box = wrapper.find('.box-position');
    wrapper.vm.$on('change', stub);
    box.trigger('click');
    expect(stub).toBeCalledWith(false);
  });

  test('Click on disabled checkbox(label). Prop checked not change', () => {
    const wrapper = mount(CheckBox, {
      propsData: { checked: true, disabled: true },
    });
    const stub = jest.fn();
    const label = wrapper.find('.label-position');
    wrapper.vm.$on('change', stub);
    label.trigger('click');
    expect(stub).toHaveBeenCalledTimes(0);
  });

  test('Disabled checkbox has special classes', () => {
    const wrapper = mount(CheckBox, {
      propsData: { checked: true, disabled: false },
    });
    expect(wrapper.find('.label-disabled').exists()).toBe(false);
    expect(wrapper.find('.box-disabled').exists()).toBe(false);
    expect(wrapper.find('.mark-disabled').exists()).toBe(false);

    wrapper.setProps({ disabled: true });
    expect(wrapper.find('.label-disabled').exists()).toBe(true);
    expect(wrapper.find('.box-disabled').exists()).toBe(true);
    expect(wrapper.find('.mark-disabled').exists()).toBe(true);
    wrapper.setProps({ checked: false });
    expect(wrapper.find('.mark-disabled').exists()).toBe(false);
  });

  test('Autofocus on start', () => {
    const wrapper = mount(CheckBox, {
      propsData: { checked: true, autofocus: true },
    });
    const inputElement = wrapper.find('input').element;
    expect(document.activeElement).toBe(inputElement);
  });

  test.skip('Focus by Tab', async done => {
    // seems that JSDOM doesn't support TAB navigation
    // https://github.com/vuejs/vue-test-utils/issues/966#issuecomment-431907137
    // https://github.com/jsdom/jsdom/issues/2102
    const wrapper = mount({
      components: { CheckBox },
      template: `
          <div>
            <check-box tabindex=1 autofocus class="c1" />
            <check-box tabindex=3 class="c3" />
            <check-box tabindex=2 class="c2" />
            <check-box tabindex=4 class="c4" />
          </div>`,
    });
    const c1 = wrapper.find('.c1>input');
    const c2 = wrapper.find('.c2>input');
    const c3 = wrapper.find('.c3>input');
    const c4 = wrapper.find('.c4>input');

    expect(document.activeElement).toBe(c1.element);
    c1.trigger('keypress.tab');
    wrapper.vm.$nextTick(wrapper);
    expect(document.activeElement).toBe(c2.element);
    c2.trigger('keypress.tab');
    wrapper.vm.$nextTick(wrapper);
    expect(document.activeElement).toBe(c3.element);
    c3.trigger('keypress.tab');
    wrapper.vm.$nextTick(wrapper);
    expect(document.activeElement).toBe(c4.element);

    done();
  });
});
