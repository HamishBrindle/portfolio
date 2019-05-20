/* eslint-disable no-unused-vars */
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import utils from '@/utils';

const { tag } = utils.string;
const { timeoutPromise } = utils.adapter;

const html = tag;

storiesOf('Select', module)
  .add('Basic', () => ({
    data() {
      return {
        options: [
          {
            value: '1',
            label: 'Option 1',
          },
          {
            value: '2',
            label: 'Option 2',
          },
          {
            value: '3',
            label: 'Option 3',
          },
          {
            value: '4',
            label: 'Option 4',
          },
          {
            value: '5',
            label: 'Option 5',
          },
        ],
        val: '',
      };
    },
    template: html`
      <div>
        <m-select
          ref="exampleSelect"
          v-model="val"
          placeholder="Select"
          @change="onChange"
          @visible-change="onVisibleChange"
          @blur="onBlur"
          @focus="onFocus"
        >
          <m-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </m-option>
        </m-select>
        <p><strong>Selected:</strong> {{ val }}</p>
        <m-button @click="focus">Focus</m-button>
        <m-button @click="blur">Blur</m-button>
        <m-button @click="setValue('3')">Set Option 3</m-button>
      </div>
    `,
    methods: {
      onChange(event) {
        console.log('onChange: ', event);
      },
      onVisibleChange(event) {
        console.log('onVisibleChange: ', event); // Is dropdown visible?
      },
      onBlur(event) {
        console.log('onBlur: ', event);
      },
      onFocus(event) {
        console.log('onFocus: ', event);
      },
      blur() {
        this.$refs.exampleSelect.blur();
      },
      focus() {
        this.$refs.exampleSelect.focus();
      },
      setValue(value) {
        this.val = value;
      },
    },
  }))
  .add('Disabled options', () => ({
    data() {
      return {
        options: [
          {
            value: '1',
            label: 'Option 1',
          },
          {
            value: '2',
            label: 'Option 2',
          },
          {
            value: '3',
            label: 'Option 3',
            disabled: true,
          },
          {
            value: '4',
            label: 'Option 4',
            disabled: true,
          },
          {
            value: '5',
            label: 'Option 5',
          },
        ],
        value: '',
      };
    },
    template: html`
      <div>
        <m-select
          v-model="value"
          placeholder="Select"
          @change="onChange"
          @visible-change="onVisibleChange"
          @blur="onBlur"
          @focus="onFocus"
        >
          <m-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
          >
          </m-option>
        </m-select>
        <p><strong>Selected:</strong> {{ value }}</p>
      </div>
    `,
    methods: {
      onChange(event) {
        console.log('onSelect: ', event);
      },
      onVisibleChange(event) {
        console.log('onVisibleChange: ', event); // Is dropdown visible?
      },
      onBlur(event) {
        console.log('onBlur: ', event);
      },
      onFocus(event) {
        console.log('onFocus: ', event);
      },
    },
  }))
  .add('Disabled select', () => ({
    data() {
      return {
        options: [
          {
            value: '1',
            label: 'Option 1',
          },
          {
            value: '2',
            label: 'Option 2',
          },
          {
            value: '3',
            label: 'Option 3',
          },
        ],
        value: '3',
      };
    },
    template: html`
      <div>
        <m-select
          v-model="value"
          placeholder="Select"
          disabled
          @change="onChange"
          @visible-change="onVisibleChange"
          @blur="onBlur"
          @focus="onFocus"
        >
          <m-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </m-option>
        </m-select>
        <p><strong>Selected:</strong> {{ value }}</p>
      </div>
    `,
    methods: {
      onChange(event) {
        console.log('onSelect: ', event);
      },
      onVisibleChange(event) {
        console.log('onVisibleChange: ', event); // Is dropdown visible?
      },
      onBlur(event) {
        console.log('onBlur: ', event);
      },
      onFocus(event) {
        console.log('onFocus: ', event);
      },
    },
  }))
  .add('Clearable single select', () => ({
    data() {
      return {
        options: [
          {
            value: '1',
            label: 'Option 1',
          },
          {
            value: '2',
            label: 'Option 2',
          },
          {
            value: '3',
            label: 'Option 3',
          },
        ],
        value: '3',
      };
    },
    template: html`
      <div>
        <m-select
          v-model="value"
          placeholder="Select"
          clearable
          @change="onChange"
          @visible-change="onVisibleChange"
          @blur="onBlur"
          @focus="onFocus"
        >
          <m-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </m-option>
        </m-select>
        <p><strong>Selected:</strong> {{ value }}</p>
      </div>
    `,
    methods: {
      onChange(event) {
        console.log('onSelect: ', event);
      },
      onVisibleChange(event) {
        console.log('onVisibleChange: ', event); // Is dropdown visible?
      },
      onBlur(event) {
        console.log('onBlur: ', event);
      },
      onFocus(event) {
        console.log('onFocus: ', event);
      },
    },
  }))
  .add('Basic multiple select', () => ({
    data() {
      return {
        options: [
          {
            value: '1',
            label: 'Option1',
          },
          {
            value: '2',
            label: 'Option2',
          },
          {
            value: '3',
            label: 'Option3',
          },
          {
            value: '4',
            label: 'Option4',
          },
          {
            value: '5',
            label: 'Option5',
          },
        ],
        value5: [],
        value11: [],
      };
    },
    template: html`
      <div>
        <m-select v-model="value5" multiple placeholder="Select" style="min-width: 35rem">
          <m-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </m-option>
        </m-select>
        <m-button @click="addOption('5')">Add Option5</m-button>
        <!-- With "collapse-tags" -->
        <m-select
          v-model="value11"
          multiple
          collapse-tags
          style="min-width: 35rem; margin-left: 2rem;"
          placeholder="Select"
        >
          <m-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </m-option>
        </m-select>
        <ul v-if="value5.length > 0">
          Selected:
          <li v-for="v in value5">{{ v }}</li>
        </ul>
      </div>
    `,
    methods: {
      addOption(option) {
        const found = !!this.value5.includes(option);
        if (!found) {
          this.value5.push(option);
        }
      },
      printValues() {
        console.log('Selected Values');
      },
    },
  }))
  .add('Custom template', () => ({
    data() {
      return {
        cities: [
          {
            value: 'Vancouver',
            label: 'Vancouver',
          },
          {
            value: 'Calgary',
            label: 'Calgary',
          },
          {
            value: 'Edmonton',
            label: 'Edmonton',
          },
          {
            value: 'Regina',
            label: 'Regina',
          },
          {
            value: 'Toronto',
            label: 'Toronto',
          },
          {
            value: 'Montreal',
            label: 'Montreal',
          },
        ],
        value6: '',
      };
    },
    template: html`
      <m-select v-model="value6" placeholder="Select" style="min-width: 30rem">
        <m-option v-for="item in cities" :key="item.value" :label="item.label" :value="item.value">
          <span style="float: left">{{ item.label }}</span>
          <span style="float: right; color: #8492a6; font-size: 1.3rem">{{ item.value }}</span>
        </m-option>
      </m-select>
    `,
  }))
  .add('Custom template (emojis)', () => ({
    data() {
      return {
        cities: [
          {
            value: 'Prayers Up!',
            label: '🙏',
          },
          {
            value: 'Om Nom Nom',
            label: '🍉',
          },
          {
            value: 'Do a barrel roll',
            label: '🛴',
          },
          {
            value: 'Fuego',
            label: '🔥',
          },
          {
            value: 'Ayy Lmao',
            label: '👽',
          },
          {
            value: 'Oye Mate',
            label: '🇦🇺',
          },
        ],
        value6: '',
      };
    },
    template: html`
      <m-select v-model="value6" placeholder="Select" style="min-width: 30rem">
        <m-option v-for="item in cities" :key="item.value" :label="item.label" :value="item.value">
          <span style="float: left">{{ item.label }}</span>
          <span style="float: right; color: #8492a6; font-size: 1.3rem">{{ item.value }}</span>
        </m-option>
      </m-select>
    `,
  }))
  .add('Option grouping', () => ({
    data() {
      return {
        options3: [
          {
            label: 'Popular cities',
            options: [
              {
                value: 'Vancouver',
                label: 'Vancouver',
              },
              {
                value: 'Toronto',
                label: 'Toronto',
              },
            ],
          },
          {
            label: 'Shitty cities',
            options: [
              {
                value: 'Regina',
                label: 'Regina',
              },
              {
                value: 'Prince George',
                label: 'Prince George',
              },
            ],
          },
        ],
        value7: '',
      };
    },
    methods: {
      selectCity(city) {
        this.value7 = city;
      },
    },
    template: html`
      <div>
        <m-select v-model="value7" placeholder="Select">
          <m-option-group v-for="group in options3" :key="group.label" :label="group.label">
            <m-option
              v-for="item in group.options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </m-option>
          </m-option-group>
        </m-select>
        <m-button @click="selectCity('Vancouver')">Select Vancouver</m-button>
      </div>
    `,
  }));
