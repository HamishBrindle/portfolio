import { mount } from '@vue/test-utils';
import NotFound from '@/views/404.vue';

describe('404.vue', () => {
  it('renders a 404 page', () => {
    const wrapper = mount(NotFound, {});
    const header = wrapper.find('h1');
    expect(header.text()).toBe('404');
  });
});
