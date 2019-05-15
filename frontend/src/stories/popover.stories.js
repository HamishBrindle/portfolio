/* eslint-disable no-unused-vars */
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import utils from '@/utils';

const html = utils.string.tag;

storiesOf('Popover', module)
  .add('Basic', () => ({
    template: html`
      <div style="display: flex; margin: 10rem;">
        <m-popover
          placement="top-start"
          title="Title"
          width="200"
          trigger="hover"
          content="this is content, this is content, this is content"
        >
          <m-button slot="reference">Hover to activate</m-button>
        </m-popover>
        &nbsp;
        <m-popover
          placement="bottom"
          title="Title"
          width="200"
          trigger="click"
          content="this is content, this is content, this is content"
        >
          <m-button slot="reference">Click to activate</m-button>
        </m-popover>
        &nbsp;
        <m-popover
          ref="popover"
          placement="right"
          title="Title"
          width="200"
          trigger="focus"
          content="this is content, this is content, this is content"
        >
          <m-button slot="reference">Focus to activate</m-button>
        </m-popover>
      </div>
    `,
    data() {
      return {
        visible: false,
      };
    },
    methods: {},
  }))
  .add('Nested information', () => ({
    template: html`
      <m-popover placement="right" width="400" trigger="click">
        <m-table :data="gridData">
          <m-table-column property="date" label="date"></m-table-column>
          <m-table-column property="name" label="name"></m-table-column>
          <m-table-column property="address" label="address"></m-table-column>
        </m-table>
        <m-button slot="reference">Click to activate</m-button>
      </m-popover>
    `,
    data() {
      return {
        gridData: [
          {
            date: '2016-05-02',
            name: 'Jack',
            address: 'New York City',
          },
          {
            date: '2016-05-04',
            name: 'Jack',
            address: 'New York City',
          },
          {
            date: '2016-05-01',
            name: 'Jack',
            address: 'New York City',
          },
          {
            date: '2016-05-03',
            name: 'Jack',
            address: 'New York City',
          },
        ],
      };
    },
    methods: {},
  }))
  .add('Nested operation', () => ({
    template: html`
      <div style="margin: 5rem 20rem;">
        <m-popover placement="top" width="320" v-model="visible2">
          <p>Are you sure to delete this?</p>
          <div style="text-align: right; margin: 0">
            <m-button size="mini" type="text" @click="onCancelButtonClick">Cancel</m-button>
            <m-button type="primary" size="mini" @click="onConfirmButtonClick">Confirm</m-button>
          </div>
          <m-button slot="reference">Delete</m-button>
        </m-popover>
      </div>
    `,
    data() {
      return {
        visible2: false,
      };
    },
    methods: {
      onCancelButtonClick(event) {
        console.log('onCancelButtonClick: event :', event);
        this.visible2 = false;
      },
      onConfirmButtonClick(event) {
        console.log('onConfirmButtonClick: event :', event);
        this.visible2 = false;
      },
    },
  }));
