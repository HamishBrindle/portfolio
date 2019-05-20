/* eslint-disable no-unused-vars */
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import utils from '@/utils';

const html = utils.string.tag;

storiesOf('Card', module)
  .add('Basic', () => ({
    class: {
      boxCard: {
        width: '480px',
        background: 'red',
      },
    },
    template: html`
      <div style="width: 40rem; margin: 5rem;">
        <m-card class="box-card">
          <div
            slot="header"
            style="display: flex; justify-content: space-between; align-items: center;"
          >
            <h1 style="display: inline; margin: 0; padding: 0; line-height: 3rem">Header Title</h1>
            <m-button style="float: right; padding: 3px 0" type="text">Button</m-button>
          </div>
          <div v-for="o in 4" :key="o" class="text item">
            {{'List item ' + o }}
          </div>
        </m-card>
      </div>
    `,
    data() {
      return {};
    },
    methods: {},
  }))
  .add('Simple', () => ({
    template: html`
      <div style="width: 40rem; margin: 5rem;">
        <m-card class="box-card">
          <div v-for="o in 4" :key="o" class="text item">
            {{'List item ' + o }}
          </div>
        </m-card>
      </div>
    `,
    data() {
      return {};
    },
    methods: {},
  }));
