/* eslint-disable no-unused-vars */
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import utils from '@/utils';

const html = utils.string.tag;

storiesOf('Radio', module)
  .add('Single radio', () => ({
    data() {
      return {
        radio: '2',
      };
    },
    template: html`
      <div>
        <m-radio v-model="radio" label="1">Option 1</m-radio>
        <p>Selected is: {{ radio }}</p>
      </div>
    `,
  }))
  .add('Single radio with border', () => ({
    data() {
      return {
        radio: '2',
      };
    },
    template: html`
      <div>
        <m-radio v-model="radio" label="1" border>Option 1</m-radio>
        <p>Selected is: {{ radio }}</p>
      </div>
    `,
  }))
  .add('Multiple radios inside radio-group', () => ({
    data() {
      return {
        radio: 'B',
      };
    },
    methods: {
      selectOption(option) {
        this.radio = option;
      },
      exampleEvent(event) {
        console.log('exampleEvent:', event);
      },
    },
    template: html`
      <div>
        <div>
          <m-radio-group v-model="radio" @change="exampleEvent">
            <m-radio disabled label="A">Option A</m-radio>
            <m-radio label="B">Option B</m-radio>
            <m-radio label="C">Option C</m-radio>
          </m-radio-group>
          <p>Selected is: {{ radio }}</p>
        </div>
        <m-button @click="selectOption('B')">Select Option B</m-button>
      </div>
    `,
  }))
  .add('Multiple radio-buttons inside radio-group', () => ({
    data() {
      return {
        radio: '2',
      };
    },
    template: html`
      <div>
        <m-radio-group v-model="radio">
          <m-radio-button label="1" border>Option 1</m-radio-button>
          <m-radio-button label="2" border>Option 2</m-radio-button>
          <m-radio-button label="3" border>Option 3</m-radio-button>
        </m-radio-group>
        <p>Selected is: {{ radio }}</p>
      </div>
    `,
  }));
