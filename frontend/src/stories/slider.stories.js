/* eslint-disable no-unused-vars */
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import utils from '@/utils';

const html = utils.string.tag;

storiesOf('Slider', module)
  .add('Basic', () => ({
    template: html`
      <div style="width: 40rem; margin-left: 1rem;">
        <div class="block">
          <span class="demonstration">Default value</span>
          <m-slider v-model="value1"></m-slider>
        </div>
        <div class="block">
          <span class="demonstration">Customized initial value</span>
          <m-slider v-model="value2"></m-slider>
        </div>
        <div class="block">
          <span class="demonstration">Hide Tooltip</span>
          <m-slider v-model="value3" :show-tooltip="false"></m-slider>
        </div>
        <div class="block">
          <span class="demonstration">Format Tooltip</span>
          <m-slider v-model="value4" :format-tooltip="formatTooltip"></m-slider>
        </div>
        <div class="block">
          <span class="demonstration">Disabled</span>
          <m-slider v-model="value5" disabled></m-slider>
        </div>
      </div>
    `,
    data() {
      return {
        value1: 0,
        value2: 50,
        value3: 36,
        value4: 48,
        value5: 42,
      };
    },
    methods: {
      formatTooltip(val) {
        return val / 100;
      },
    },
  }))
  .add('Breakpoints', () => ({
    template: html`
      <div style="width: 40rem; margin-left: 1rem;">
        <div class="block">
          <span class="demonstration">Breakpoints not displayed</span>
          <m-slider v-model="value6" :step="10"> </m-slider>
        </div>
        <div class="block">
          <span class="demonstration">Breakpoints displayed</span>
          <m-slider v-model="value7" :step="25" show-stops> </m-slider>
        </div>
      </div>
    `,
    data() {
      return {
        value6: 0,
        value7: 0,
      };
    },
    methods: {},
  }))
  .add('Input box', () => ({
    template: html`
      <div style="width: 40rem; margin-left: 1rem;">
        <m-slider v-model="value8" show-input> </m-slider>
      </div>
    `,
    data() {
      return {
        value8: 0,
      };
    },
    methods: {},
  }))
  .add('Range selection', () => ({
    template: html`
      <div style="width: 40rem; margin-left: 1rem;">
        <m-slider v-model="value9" range show-stops :max="10" :format-tooltip="formatTooltip">
        </m-slider>
      </div>
    `,
    data() {
      return {
        value9: [4, 8],
      };
    },
    methods: {
      formatTooltip() {
        const diff = Math.abs(this.value9[0] - this.value9[1]);
        return `Difference: ${diff.toString()}`;
      },
    },
  }))
  .add('Vertical', () => ({
    template: html`
      <div style="width: 40rem; margin: 1rem;">
        <m-slider v-model="value10" vertical height="200px"> </m-slider>
      </div>
    `,
    data() {
      return {
        value10: 0,
      };
    },
    methods: {},
  }));
