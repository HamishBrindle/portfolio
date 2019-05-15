/* eslint-disable no-unused-vars */
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import utils from '@/utils';

const html = utils.string.tag;

storiesOf('Switch', module)
  .add('Basic', () => ({
    template: html`
      <div>
        <m-switch v-model="value1"> </m-switch>
        <m-switch v-model="value2" active-color="#41f1f4" inactive-color="#f44286"> </m-switch>
        <div>
          <p>Switch 1: {{ value1 }}</p>
          <p>Switch 2: {{ value2 }}</p>
          <m-button @click="toggleBothSwitches()">Toggle Both Switches</m-button>
        </div>
      </div>
    `,
    data() {
      return {
        value1: true,
        value2: true,
      };
    },
    methods: {
      toggleBothSwitches() {
        this.value1 = !this.value1;
        this.value2 = !this.value2;
      },
    },
  }))
  .add('Text descriptions', () => ({
    template: html`
      <div>
        <m-switch v-model="value3" active-text="Pay by month" inactive-text="Pay by year">
        </m-switch>
        <m-switch
          style="display: block"
          v-model="value4"
          active-color="papayawhip"
          inactive-color="salmon"
          active-text="👼"
          inactive-text="🤘"
        >
        </m-switch>
      </div>
    `,
    data() {
      return {
        value3: true,
        value4: true,
      };
    },
    methods: {},
  }))
  .add('Icons', () => ({
    template: html`
      <div>
        <m-switch
          v-model="value3"
          active-icon-class="el-icon-circle-check"
          inactive-icon-class="el-icon-circle-close"
        >
        </m-switch>
      </div>
    `,
    data() {
      return {
        value3: true,
        value4: true,
      };
    },
    methods: {},
  }));
