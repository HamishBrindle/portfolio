/* eslint-disable no-unused-vars */
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import utils from '@/utils';

const { tag } = utils.string;

const html = tag;

storiesOf('InputNumber', module)
  .add('Basic', () => ({
    template: html`
      <div>
        <m-input-number
          v-model="num1"
          :min="1"
          :max="10"
          @change="handleChange"
          ref="exampleInputNumber"
        ></m-input-number>
        <p><strong>Selected number:</strong> {{ num1 }}</p>
        <m-button @click="select">Select</m-button>
        <m-button @click="focus">Focus</m-button>
        <m-button @click="setValue(10)">Set to 10</m-button>
      </div>
    `,
    data() {
      return {
        num1: 1,
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      },
      setValue(v) {
        this.num1 = v;
      },
      focus() {
        this.$refs.exampleInputNumber.focus();
      },
      select() {
        this.$refs.exampleInputNumber.select();
      },
    },
  }))
  .add('Disabled', () => ({
    template: html`
      <div>
        <m-input-number
          v-model="num1"
          :min="1"
          :max="10"
          @change="handleChange"
          ref="exampleInputNumber"
          disabled
        ></m-input-number>
        <p><strong>Selected number:</strong> {{ num1 }}</p>
        <m-button @click="select">Select</m-button>
        <m-button @click="focus">Focus</m-button>
      </div>
    `,
    data() {
      return {
        num1: 1,
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      },
      focus() {
        this.$refs.exampleInputNumber.focus();
      },
      select() {
        this.$refs.exampleInputNumber.select();
      },
    },
  }))
  .add('Steps (5)', () => ({
    template: html`
      <div>
        <m-input-number
          v-model="num1"
          :min="1"
          :step="5"
          @change="handleChange"
          ref="exampleInputNumber"
        ></m-input-number>
        <p><strong>Selected number:</strong> {{ num1 }}</p>
        <m-button @click="select">Select</m-button>
        <m-button @click="focus">Focus</m-button>
      </div>
    `,
    data() {
      return {
        num1: 1,
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      },
      focus() {
        this.$refs.exampleInputNumber.focus();
      },
      select() {
        this.$refs.exampleInputNumber.select();
      },
    },
  }))
  .add('Precision', () => ({
    template: html`
      <div>
        <m-input-number
          v-model="num1"
          :precision="2"
          :step="0.1"
          :max="10"
          @change="handleChange"
          ref="exampleInputNumber"
        ></m-input-number>
        <p><strong>Selected number:</strong> {{ num1 }}</p>
        <m-button @click="select">Select</m-button>
        <m-button @click="focus">Focus</m-button>
      </div>
    `,
    data() {
      return {
        num1: 1,
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      },
      focus() {
        this.$refs.exampleInputNumber.focus();
      },
      select() {
        this.$refs.exampleInputNumber.select();
      },
    },
  }))
  .add('Sizes', () => ({
    template: html`
      <div>
        <m-input-number v-model="num4"></m-input-number>
        <m-input-number size="medium" v-model="num5"></m-input-number>
        <m-input-number size="small" v-model="num6"></m-input-number>
        <m-input-number size="mini" v-model="num7"></m-input-number>
      </div>
    `,
    data() {
      return {
        num4: 1,
        num5: 1,
        num6: 1,
        num7: 1,
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      },
      focus() {
        this.$refs.exampleInputNumber.focus();
      },
      select() {
        this.$refs.exampleInputNumber.select();
      },
    },
  }))
  .add('Controls position', () => ({
    template: html`
      <div>
        <m-input-number
          v-model="num4"
          controls-position="right"
          @change="handleChange"
          :min="1"
          :max="10"
        ></m-input-number>
      </div>
    `,
    data() {
      return {
        num4: 1,
        num5: 1,
        num6: 1,
        num7: 1,
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      },
      focus() {
        this.$refs.exampleInputNumber.focus();
      },
      select() {
        this.$refs.exampleInputNumber.select();
      },
    },
  }));
