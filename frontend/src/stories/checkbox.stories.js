/* eslint-disable no-unused-vars */
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import utils from '@/utils';

const html = utils.string.tag;

storiesOf('Checkbox', module)
  .add('Single checkbox', () => ({
    data() {
      return {
        checked: false,
      };
    },
    methods: {
      exampleEvent(event) {
        console.log(event);
      },
    },
    template: html`
      <div>
        <m-checkbox v-model="checked" label="1" @change="exampleEvent">Option 1</m-checkbox>
        <p>Option 1 is checked: {{ checked }}</p>
      </div>
    `,
  }))
  .add('Multiple checkboxes in checkbox-group', () => ({
    data() {
      return {
        checkList: ['selected and disabled', 'Option A'],
      };
    },
    methods: {
      exampleChangeEvent() {
        console.log('Checked', this.checkList);
      },
      selectOption(option) {
        if (!this.checkList.includes(option)) {
          this.checkList.push(option);
        }
      },
    },
    template: html`
      <div>
        <m-checkbox-group v-model="checkList" @change="exampleChangeEvent()">
          <m-checkbox label="Option A"></m-checkbox>
          <m-checkbox label="Option B"></m-checkbox>
          <m-checkbox label="Option C"></m-checkbox>
          <m-checkbox label="disabled" disabled></m-checkbox>
          <m-checkbox label="selected and disabled" disabled></m-checkbox>
        </m-checkbox-group>
        <m-button @click="selectOption('Option B')">Select Option B</m-button>
      </div>
    `,
  }))
  .add('Multiple checkboxes in checkbox-group with an indeterminate', () => ({
    data() {
      return {
        checkAll: false,
        checkedCities: ['Shanghai', 'Beijing'],
        cities: ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'],
        isIndeterminate: true,
      };
    },
    methods: {
      handleCheckAllChange(val) {
        this.checkedCities = val ? this.cities : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        const checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      },
    },
    template: html`
      <div>
        <m-checkbox
          :indeterminate="isIndeterminate"
          v-model="checkAll"
          @change="handleCheckAllChange"
          >Check all</m-checkbox
        >
        <div style="margin: 15px 0;"></div>
        <m-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
          <m-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</m-checkbox>
        </m-checkbox-group>
      </div>
    `,
  }))
  .add('Multiple checkboxes in checkbox-group and minimum (1) / maximum (3) items checked', () => ({
    data() {
      return {
        checkedCities1: ['Shanghai', 'Beijing'],
        cities: ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'],
      };
    },
    template: html`
      <m-checkbox-group v-model="checkedCities1" :min="1" :max="3">
        <m-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</m-checkbox>
      </m-checkbox-group>
    `,
  }))
  .add('Multiple checkboxes in checkbox-group with button styles', () => ({
    data() {
      return {
        checkboxGroup1: ['Shanghai'],
        checkboxGroup2: ['Beijing'],
        checkboxGroup3: ['Guangzhou'],
        checkboxGroup4: ['Shenzhen'],
        cities: ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'],
      };
    },
    template: html`
      <div>
        <div>
          <m-checkbox-group v-model="checkboxGroup1">
            <m-checkbox-button v-for="city in cities" :label="city" :key="city"
              >{{city}}</m-checkbox-button
            >
          </m-checkbox-group>
        </div>
        <div style="margin-top: 20px">
          <m-checkbox-group v-model="checkboxGroup2" size="medium">
            <m-checkbox-button v-for="city in cities" :label="city" :key="city"
              >{{city}}</m-checkbox-button
            >
          </m-checkbox-group>
        </div>
        <div style="margin-top: 20px">
          <m-checkbox-group v-model="checkboxGroup3" size="small">
            <m-checkbox-button
              v-for="city in cities"
              :label="city"
              :disabled="city === 'Beijing'"
              :key="city"
              >{{city}}</m-checkbox-button
            >
          </m-checkbox-group>
        </div>
        <div style="margin-top: 20px">
          <m-checkbox-group v-model="checkboxGroup4" size="mini" disabled>
            <m-checkbox-button v-for="city in cities" :label="city" :key="city"
              >{{city}}</m-checkbox-button
            >
          </m-checkbox-group>
        </div>
      </div>
    `,
  }));
