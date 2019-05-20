/* eslint-disable no-unused-vars */
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import utils from '@/utils';

const html = utils.string.tag;

storiesOf('Button', module)
  .add('Default', () => ({
    template: html`
      <m-button>Default</m-button>
    `,
  }))
  .add('Primary', () => ({
    data() {
      return {
        type: 'primary',
      };
    },
    template: html`
      <m-button :type="type">Primary</m-button>
    `,
  }))
  .add('Success', () => ({
    data() {
      return {
        type: 'success',
      };
    },
    template: html`
      <m-button :type="type">Success</m-button>
    `,
  }))
  .add('Info', () => ({
    data() {
      return {
        type: 'info',
      };
    },
    template: html`
      <m-button :type="type">Info</m-button>
    `,
  }))
  .add('Warning', () => ({
    data() {
      return {
        type: 'warning',
      };
    },
    template: html`
      <m-button :type="type">Warning</m-button>
    `,
  }))
  .add('Danger', () => ({
    data() {
      return {
        type: 'danger',
      };
    },
    template: html`
      <m-button :type="type">Danger</m-button>
    `,
  }))
  .add('Rounded', () => ({
    data() {
      return {
        type: 'primary',
      };
    },
    template: html`
      <m-button :type="type" round>Rounded</m-button>
    `,
  }))
  .add('Primary and plain', () => ({
    data() {
      return {
        type: 'primary',
      };
    },
    template: html`
      <m-button :type="type" plain>Plain</m-button>
    `,
  }))
  .add('Success as circle with icon', () => ({
    data() {
      return {
        type: 'success',
      };
    },
    template: html`
      <m-button :type="type" circle icon="el-icon-star-on" /></m-button>
    `,
  }))
  .add('Primary with text and icon', () => ({
    data() {
      return {
        type: 'primary',
      };
    },
    template: html`
      <m-button :type="type" icon="el-icon-edit-outline">Edit</m-button>
    `,
  }))
  .add('Primary with text and icon, and opens a message-box', () => ({
    data() {
      return {
        type: 'primary',
      };
    },
    methods: {
      onButtonClick() {
        this.$alert('Press OK to confirm...', 'Confirm', {
          confirmButtonText: 'OK',
          callback: (a) => {
            this.$message({
              type: a === 'confirm' ? 'success' : 'error',
              message: `You clicked: ${a}`,
            });
          },
        });
      },
    },
    template: html`
      <m-button :type="type" icon="el-icon-check" @click="onButtonClick()">Confirm</m-button>
    `,
  }))
  .add('Loading indicator', () => ({
    template: html`
      <m-button type="primary" :loading="true">Loading</m-button>
    `,
    data() {
      return {
        loading: true,
      };
    },
    methods: {},
  }));
