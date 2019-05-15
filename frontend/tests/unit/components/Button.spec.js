import { mount } from '@vue/test-utils';
import Button from '@/components/Button.vue';

/**
 * ! Testing components that make use of dynamic importing
 * ! is broken right now...
 */

describe('Button.vue', () => {
  it.skip('renders success button with text from props', () => {
    const type = 'success';
    const text = 'Hello!';
    const wrapper = mount(Button, {
      propsData: { type },
      slots: {
        default: text,
      },
    });

    expect(wrapper.text()).toMatch(text);
    expect(wrapper.classes()).toContain('m-button');
  });
});
