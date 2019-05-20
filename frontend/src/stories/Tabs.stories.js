/* eslint-disable no-unused-vars */
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import utils from '@/utils';

const html = utils.string.tag;

// ! TODO: These don't fucking work for some reason...

storiesOf('Tabs', module)
  .add('Basic', () => ({
    template: html`
      <m-tabs v-model="activeName" @tab-click="handleClick" type="border-card">
        <m-tab-pane label="User" name="first">User</m-tab-pane>
        <m-tab-pane label="Config" name="second">Config</m-tab-pane>
        <m-tab-pane label="Role" name="third">Role</m-tab-pane>
        <m-tab-pane label="Task" name="fourth">Task</m-tab-pane>
      </m-tabs>
    `,
    data() {
      return {
        activeName: 'first',
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
    },
  }))
  .add('Custom tab', () => ({
    template: html`
      <m-tabs type="border-card">
        <m-tab-pane>
          <span slot="label"><i class="el-icon-date"></i> Route</span>
          Route
        </m-tab-pane>
        <m-tab-pane label="Config">Config</m-tab-pane>
        <m-tab-pane label="Role">Role</m-tab-pane>
        <m-tab-pane label="Task">Task</m-tab-pane>
      </m-tabs>
    `,
  }));
