/* eslint-disable no-unused-vars */
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import utils from '@/utils';

const { tag } = utils.string;
const { timeoutPromise } = utils.adapter;

const html = tag;

storiesOf('Input', module)
  .add('Basic', () => ({
    data() {
      return {
        text: '',
      };
    },
    methods: {
      setValue(value) {
        this.text = value;
      },
    },
    template: html`
      <div>
        <m-input placeholder="Search..." v-model="text"></m-input>
        <p><strong>Searching for:</strong> {{ text.length > 0 ? text : 'Empty' }}</p>
        <m-button @click="setValue('Toy Truck')">Set Value</m-button>
      </div>
    `,
  }))
  .add('Disabled', () => ({
    data() {
      return {
        text: '',
      };
    },
    template: html`
      <div>
        <m-input placeholder="Search..." v-model="text" disabled></m-input>
      </div>
    `,
  }))
  .add('Clearable', () => ({
    data() {
      return {
        text: '',
      };
    },
    template: html`
      <div>
        <m-input placeholder="Search..." v-model="text" clearable></m-input>
        <p><strong>Searching for:</strong> {{ text.length > 0 ? text : 'Empty' }}</p>
      </div>
    `,
  }))
  .add('Password field', () => ({
    data() {
      return {
        text: '',
      };
    },
    template: html`
      <div>
        <m-input placeholder="Please input password" v-model="text" show-password></m-input>
      </div>
    `,
  }))
  .add('Icons on field', () => ({
    data() {
      return {
        input2: '',
        input21: '',
        input22: '',
        input23: '',
      };
    },
    template: html`
      <div>
        <!-- Using Attributes -->
        <div class="demo-input-suffix">
          <span class="demo-input-label">Using attributes</span>
          <m-input placeholder="Pick a date" suffix-icon="el-icon-date" v-model="input2"> </m-input>
          <m-input placeholder="Type something" prefix-icon="el-icon-search" v-model="input21">
          </m-input>
        </div>
        <!-- Using Slots -->
        <div class="demo-input-suffix">
          <span class="demo-input-label">Using slots (TODO: the styling is off)</span>
          <m-input placeholder="Pick a date" v-model="input22">
            <i slot="suffix" class="el-icon-date" style="width: 2.5rem"></i>
          </m-input>
          <m-input placeholder="Type something" v-model="input23">
            <i slot="prefix" class="el-icon-search"></i>
          </m-input>
        </div>
      </div>
    `,
  }))
  .add('Basic (use accessability methods)', () => ({
    data() {
      return {
        text: 'Select this text',
      };
    },
    methods: {
      focus() {
        this.$refs.exampleInput.focus();
      },
      blur() {
        this.$refs.exampleInput.blur();
      },
      select() {
        this.$refs.exampleInput.select();
      },
    },
    template: html`
      <div>
        <m-input placeholder="Search..." v-model="text" ref="exampleInput"></m-input>
        <m-button @click="select">Select</m-button>
        <m-button @click="focus">Focus</m-button>
        <m-button @click="blur">Blur</m-button>
      </div>
    `,
  }))
  .add('Textarea', () => ({
    data() {
      return {
        textarea: '',
      };
    },
    template: html`
      <div>
        <m-input type="textarea" :rows="2" placeholder="Please input" v-model="textarea"> </m-input>
        <p><strong>Textarea contains:</strong> {{ textarea.length > 0 ? textarea : 'Empty' }}</p>
      </div>
    `,
  }))
  .add('Textarea (Autosizing)', () => ({
    data() {
      return {
        textarea2: '',
        textarea3: '',
      };
    },
    template: html`
      <div>
        <m-input type="textarea" autosize placeholder="Please input" v-model="textarea2"> </m-input>
        <p>
          <strong>Textarea #2 contains:</strong> {{ textarea2.length > 0 ? textarea2 : 'Empty' }}
        </p>

        <div style="margin: 20px 0;"></div>
        <m-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4}"
          placeholder="Please input"
          v-model="textarea3"
        >
        </m-input>
        <p>
          <strong>Textarea #3 contains:</strong> {{ textarea3.length > 0 ? textarea3 : 'Empty' }}
        </p>
      </div>
    `,
  }))
  .add('Mixed input', () => ({
    data() {
      return {
        input3: '',
        input4: '',
        input5: '',
        select: '',
      };
    },
    template: html`
      <div>
        <div>
          <m-input placeholder="Please input" v-model="input3">
            <template slot="prepend"
              >Http://</template
            >
          </m-input>
        </div>
        <div style="margin-top: 15px;">
          <m-input placeholder="Please input" v-model="input4">
            <template slot="append"
              >.com</template
            >
          </m-input>
        </div>
        <div style="margin-top: 15px;">
          <m-input placeholder="Please input" v-model="input5" class="input-with-select">
            <m-select v-model="select" slot="prepend" placeholder="Select">
              <m-option label="Restaurant" value="1"></m-option>
              <m-option label="Order No." value="2"></m-option>
              <m-option label="Tel" value="3"></m-option>
            </m-select>
            <m-button slot="append" icon="el-icon-search"></m-button>
          </m-input>
        </div>
      </div>
    `,
  }))
  .add('Sizes', () => ({
    data() {
      return {
        input6: '',
        input7: '',
        input8: '',
        input9: '',
      };
    },
    template: html`
      <div>
        <div class="demo-input-size">
          <m-input placeholder="Please Input" v-model="input6"> </m-input>
          <m-input size="medium" placeholder="Please Input" v-model="input7"> </m-input>
          <m-input size="small" placeholder="Please Input" v-model="input8"> </m-input>
          <m-input size="mini" placeholder="Please Input" v-model="input9"> </m-input>
        </div>
      </div>
    `,
  }))
  .add('Autocomplete', () => ({
    template: html`
      <m-container>
        <m-row class="demo-autocomplete">
          <m-col :span="12">
            <div class="sub-title">On focus</div>
            <m-autocomplete
              class="inline-input"
              v-model="state1"
              :fetch-suggestions="querySearch"
              placeholder="Please Input"
              @select="handleSelect"
            >
            </m-autocomplete>
            <p><strong>Autocomplete value:</strong> {{ state1 }}</p>
          </m-col>
          <m-col :span="12">
            <div class="sub-title">On input</div>
            <m-autocomplete
              ref="exampleAutocomplete"
              class="inline-input"
              v-model="state2"
              :fetch-suggestions="querySearch"
              placeholder="Please Input"
              :trigger-on-focus="false"
              @select="handleSelect"
            >
            </m-autocomplete>
            <m-button @click="focus">Focus Autocomplete 2</m-button>
          </m-col>
        </m-row>
        <m-button @click="setValue('Toy Truck')">Set Value</m-button>
      </m-container>
    `,
    data() {
      return {
        links: [],
        state1: '',
        state2: '',
      };
    },
    methods: {
      querySearch(queryString, cb) {
        const { links } = this;
        const results = queryString ? links.filter(this.createFilter(queryString)) : links;
        // call callback function to return suggestions
        cb(results);
      },
      createFilter(queryString) {
        return link => link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
      },
      loadAll() {
        return [
          { value: 'vue', link: 'https://github.com/vuejs/vue' },
          { value: 'element', link: 'https://github.com/ElemeFE/element' },
          { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
          { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
          { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
          { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
          { value: 'babel', link: 'https://github.com/babel/babel' },
        ];
      },
      handleSelect(item) {
        console.log(item);
      },
      focus() {
        this.$refs.exampleAutocomplete.focus();
      },
      setValue(value) {
        this.state1 = value;
      },
    },
    mounted() {
      this.links = this.loadAll();
    },
  }))
  .add('Autocomplete (custom template)', () => ({
    // TODO: Not working yet.
    template: html`
      <m-autocomplete
        popper-class="my-autocomplete"
        v-model="state3"
        :fetch-suggestions="querySearch"
        placeholder="Please input"
        @select="handleSelect"
      >
        <i class="el-icon-edit el-input__icon" slot="suffix" @click="handleIconClick"> </i>
        <template v-slot:item="{ item }">
          <div class="value">{{ item.value }}</div>
          <span class="link">{{ item.link }}</span>
        </template>
      </m-autocomplete>
    `,
    data() {
      return {
        links: [],
        state3: '',
      };
    },
    methods: {
      querySearch(queryString, cb) {
        const { links } = this;
        const results = queryString ? links.filter(this.createFilter(queryString)) : links;
        // call callback function to return suggestion objects
        cb(results);
      },
      createFilter(queryString) {
        return link => link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
      },
      loadAll() {
        return [
          { value: 'vue', link: 'https://github.com/vuejs/vue' },
          { value: 'element', link: 'https://github.com/ElemeFE/element' },
          { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
          { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
          { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
          { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
          { value: 'babel', link: 'https://github.com/babel/babel' },
        ];
      },
      handleSelect(item) {
        console.log(item);
      },
      handleIconClick(ev) {
        console.log(ev);
      },
    },
    mounted() {
      this.links = this.loadAll();
    },
  }))
  .add('Autocomplete (fetch)', () => ({
    template: html`
      <m-autocomplete
        v-model="state4"
        :fetch-suggestions="querySearchAsync"
        placeholder="Please input"
        @select="handleSelect"
      ></m-autocomplete>
    `,
    data() {
      return {
        links: [],
        state4: '',
        timer: null,
        error: null,
      };
    },
    methods: {
      loadAll() {
        return [
          { value: 'vue', link: 'https://github.com/vuejs/vue' },
          { value: 'element', link: 'https://github.com/ElemeFE/element' },
          { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
          { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
          { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
          { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
          { value: 'babel', link: 'https://github.com/babel/babel' },
        ];
      },
      querySearchAsync(queryString, cb) {
        const { links } = this;
        const results = queryString ? links.filter(this.createFilter(queryString)) : links;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 3000 * Math.random());
      },
      createFilter(queryString) {
        return link => link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
      },
      handleSelect(item) {
        console.log(item);
      },
    },
  }))
  .add('Autocomplete (fetch + timeout error)', () => ({
    template: html`
      <div>
        <m-autocomplete
          v-model="state4"
          :fetch-suggestions="querySearchAsync"
          placeholder="Please input"
          @select="handleSelect"
        ></m-autocomplete>
        <code>{{ (error) ? error : 'No Error' }}</code>
      </div>
    `,
    data() {
      return {
        links: [],
        state4: '',
        timer: null,
        error: null,
      };
    },
    methods: {
      loadAll() {
        return [
          { value: 'vue', link: 'https://github.com/vuejs/vue' },
          { value: 'element', link: 'https://github.com/ElemeFE/element' },
          { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
          { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
          { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
          { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
          { value: 'babel', link: 'https://github.com/babel/babel' },
        ];
      },
      async querySearchAsync(queryString, cb) {
        const { links } = this;
        this.error = null;

        clearTimeout(this.timer);
        const getData = new Promise((resolve, reject) => {
          this.timer = setTimeout(() => {
            resolve(queryString ? links.filter(this.createFilter(queryString)) : links);
          }, 2000);
        });

        let results;
        try {
          results = await timeoutPromise(getData, 1000);
        } catch (error) {
          console.error(error);
          this.error = error;
          results = [];
        }

        cb(results);
      },
      createFilter(queryString) {
        return link => link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
      },
      handleSelect(item) {
        console.log(item);
      },
    },
    mounted() {
      this.links = this.loadAll();
    },
  }));
