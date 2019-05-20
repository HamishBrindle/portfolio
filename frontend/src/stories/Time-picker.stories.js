/* eslint-disable no-unused-vars */
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import utils from '@/utils';

const html = utils.string.tag;

storiesOf('TimePicker', module).add('Basic', () => ({
  template: html`
    <div>
      <m-time-picker
        v-model="value2"
        :picker-options="{
            selectableRange: '18:30:00 - 20:30:00'
           }"
        placeholder="Arbitrary time"
      >
      </m-time-picker>
      <m-time-picker
        arrow-control
        v-model="value3"
        :picker-options="{
            selectableRange: '18:30:00 - 20:30:00'
          }"
        placeholder="Arbitrary time"
      >
      </m-time-picker>
    </div>
  `,
  data() {
    return {
      value2: '',
      value3: '',
    };
  },
  methods: {},
}));
