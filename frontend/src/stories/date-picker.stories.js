/* eslint-disable no-unused-vars */
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import utils from '@/utils';

const html = utils.string.tag;

storiesOf('DatePicker', module)
  .add('Basic', () => ({
    template: html`
      <div>
        <div style="display: block;">
          <p>Default</p>
          <m-date-picker v-model="value1" type="date" placeholder="Pick a day"> </m-date-picker>
        </div>
        <div style="display: block;">
          <p>Picker with quick options</p>
          <m-date-picker
            v-model="value2"
            type="date"
            placeholder="Pick a day"
            :picker-options="pickerOptions"
          >
          </m-date-picker>
        </div>
      </div>
    `,
    data() {
      return {
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [
            {
              text: 'Today',
              onClick(picker) {
                picker.$emit('pick', new Date());
              },
            },
            {
              text: 'Yesterday',
              onClick(picker) {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24);
                picker.$emit('pick', date);
              },
            },
            {
              text: 'A week ago',
              onClick(picker) {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit('pick', date);
              },
            },
          ],
        },
        value1: '',
        value2: '',
      };
    },
  }))
  .add('Different measurements', () => ({
    template: html`
      <m-container>
        <div class="container">
          <div class="block">
            <span class="demonstration">Week</span>
            <m-date-picker v-model="value1" type="week" format="Week WW" placeholder="Pick a week">
            </m-date-picker>
          </div>
          <div class="block">
            <span class="demonstration">Month</span>
            <m-date-picker v-model="value2" type="month" placeholder="Pick a month">
            </m-date-picker>
          </div>
        </div>
        <div class="container">
          <div class="block">
            <span class="demonstration">Year</span>
            <m-date-picker v-model="value3" type="year" placeholder="Pick a year"> </m-date-picker>
          </div>
          <div class="block">
            <span class="demonstration">Dates</span>
            <m-date-picker type="dates" v-model="value4" placeholder="Pick one or more dates">
            </m-date-picker>
          </div>
        </div>
      </m-container>
    `,
    data() {
      return {
        value1: '',
        value2: '',
        value3: '',
        value4: '',
      };
    },
    methods: {},
  }))
  .add('Date Range', () => ({
    template: html`
      <div>
        <div class="block">
          <p>Default</p>
          <m-date-picker
            v-model="value1"
            type="daterange"
            range-separator="To"
            start-placeholder="Start date"
            end-placeholder="End date"
          >
          </m-date-picker>
        </div>
        <div class="block">
          <p>With quick options</p>
          <m-date-picker
            v-model="value2"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="To"
            start-placeholder="Start date"
            end-placeholder="End date"
            :picker-options="pickerOptions"
          >
          </m-date-picker>
        </div>
      </div>
    `,
    data() {
      return {
        pickerOptions: {
          shortcuts: [
            {
              text: 'Last week',
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit('pick', [start, end]);
              },
            },
            {
              text: 'Last month',
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                picker.$emit('pick', [start, end]);
              },
            },
            {
              text: 'Last 3 months',
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                picker.$emit('pick', [start, end]);
              },
            },
          ],
        },
        value1: '',
        value2: '',
      };
    },
    methods: {},
  }))
  .add('Month range', () => ({
    template: html`
      <div>
        <div class="block">
          <p class="demonstration">Default</p>
          <m-date-picker
            v-model="value1"
            type="monthrange"
            range-separator="To"
            start-placeholder="Start month"
            end-placeholder="End month"
          >
          </m-date-picker>
        </div>
        <div class="block">
          <p class="demonstration">With quick options</p>
          <m-date-picker
            v-model="value2"
            type="monthrange"
            align="right"
            unlink-panels
            range-separator="To"
            start-placeholder="Start month"
            end-placeholder="End month"
            :picker-options="pickerOptions"
          >
          </m-date-picker>
        </div>
      </div>
    `,
    data() {
      return {
        pickerOptions: {
          shortcuts: [
            {
              text: 'This month',
              onClick(picker) {
                picker.$emit('pick', [new Date(), new Date()]);
              },
            },
            {
              text: 'This year',
              onClick(picker) {
                const end = new Date();
                const start = new Date(new Date().getFullYear(), 0);
                picker.$emit('pick', [start, end]);
              },
            },
            {
              text: 'Last 6 months',
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setMonth(start.getMonth() - 6);
                picker.$emit('pick', [start, end]);
              },
            },
          ],
        },
        value1: '',
        value2: '',
      };
    },
    methods: {},
  }));
