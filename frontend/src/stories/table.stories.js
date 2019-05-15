/* eslint-disable no-unused-vars */
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import utils from '@/utils';

const html = utils.string.tag;

storiesOf('Table', module)
  .add('Basic', () => ({
    template: html`
      <m-card style="width: 90rem; margin: 5rem;">
        <m-table :data="tableData" style="width: 100%">
          <m-table-column prop="date" label="Date" width="180"> </m-table-column>
          <m-table-column prop="name" label="Name" width="180"> </m-table-column>
          <m-table-column prop="address" label="Address"> </m-table-column>
          <m-table-column prop="something" label="Something Else"> </m-table-column>
        </m-table>
      </m-card>
    `,
    data() {
      return {
        tableData: [
          {
            date: '2016-05-03',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
            something: 'Only me',
          },
          {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
          {
            date: '2016-05-04',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
            something: 'And Me',
          },
          {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
        ],
      };
    },
    methods: {},
  }))
  .add('Striped', () => ({
    template: html`
      <m-card style="width: 90rem; margin: 5rem;">
        <m-table :data="tableData" stripe>
          <m-table-column prop="date" label="Date" width="180"> </m-table-column>
          <m-table-column prop="name" label="Name" width="180"> </m-table-column>
          <m-table-column prop="address" label="Address"> </m-table-column>
        </m-table>
      </m-card>
    `,
    data() {
      return {
        tableData: [
          {
            date: '2016-05-03',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
          {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
          {
            date: '2016-05-04',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
          {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
        ],
      };
    },
    methods: {},
  }))
  .add('Border', () => ({
    template: html`
      <m-card style="width: 90rem; margin: 5rem;">
        <m-table :data="tableData" border>
          <m-table-column prop="date" label="Date" width="180"> </m-table-column>
          <m-table-column prop="name" label="Name" width="180"> </m-table-column>
          <m-table-column prop="address" label="Address"> </m-table-column>
        </m-table>
      </m-card>
    `,
    data() {
      return {
        tableData: [
          {
            date: '2016-05-03',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
          {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
          {
            date: '2016-05-04',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
          {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
        ],
      };
    },
    methods: {},
  }))
  .add('Status', () => ({
    template: html`
      <m-card style="width: 90rem; margin: 5rem;">
        <m-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
          <m-table-column prop="date" label="Date" width="180"> </m-table-column>
          <m-table-column prop="name" label="Name" width="180"> </m-table-column>
          <m-table-column prop="address" label="Address"> </m-table-column>
        </m-table>
      </m-card>
    `,
    methods: {
      tableRowClassName({ row, rowIndex }) {
        if (rowIndex === 1) {
          return 'warning-row';
        }
        if (rowIndex === 2) {
          return 'danger-row';
        }
        if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },
    },
    data() {
      return {
        tableData: [
          {
            date: '2016-05-03',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
          {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
          {
            date: '2016-05-04',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
          {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
        ],
      };
    },
  }))
  .add('Fixed header', () => ({
    template: html`
      <m-card style="width: 90rem; margin: 5rem;">
        <m-table :data="tableData" height="250" style="width: 100%">
          <m-table-column prop="date" label="Date" width="180"> </m-table-column>
          <m-table-column prop="name" label="Name" width="180"> </m-table-column>
          <m-table-column prop="address" label="Address"> </m-table-column>
        </m-table>
      </m-card>
    `,
    data() {
      return {
        tableData: [
          {
            date: '2016-05-03',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
          {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
          {
            date: '2016-05-04',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
          {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
          {
            date: '2016-05-08',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
          {
            date: '2016-05-06',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
          {
            date: '2016-05-07',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
        ],
      };
    },
    methods: {},
  }))
  .add('Fixed column', () => ({
    template: html`
      <m-card style="width: 70rem; margin: 5rem;">
        <m-table :data="tableData">
          <m-table-column fixed prop="date" label="Date" width="150"> </m-table-column>
          <m-table-column prop="name" label="Name" width="120"> </m-table-column>
          <m-table-column prop="state" label="State" width="120"> </m-table-column>
          <m-table-column prop="city" label="City" width="120"> </m-table-column>
          <m-table-column prop="address" label="Address" width="300"> </m-table-column>
          <m-table-column prop="zip" label="Zip" width="120"> </m-table-column>
          <m-table-column fixed="right" label="Operations" width="120">
            <template slot-scope="scope">
              <m-button @click="handleClick" type="text" size="small">Detail</m-button>
              <m-button type="text" size="small">Edit</m-button>
            </template>
          </m-table-column>
        </m-table>
      </m-card>
    `,
    methods: {
      handleClick() {
        console.log('click');
      },
    },
    data() {
      return {
        tableData: [
          {
            date: '2016-05-03',
            name: 'Tom',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            zip: 'CA 90036',
            tag: 'Home',
          },
          {
            date: '2016-05-02',
            name: 'Tom',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            zip: 'CA 90036',
            tag: 'Office',
          },
          {
            date: '2016-05-04',
            name: 'Tom',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            zip: 'CA 90036',
            tag: 'Home',
          },
          {
            date: '2016-05-01',
            name: 'Tom',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            zip: 'CA 90036',
            tag: 'Office',
          },
        ],
      };
    },
  }))
  .add('Fixed header and column', () => ({
    template: html`
      <m-card style="width: 60rem; margin: 5rem;">
        <m-table :data="tableData" height="250">
          <m-table-column fixed prop="date" label="Date" width="150"> </m-table-column>
          <m-table-column prop="name" label="Name" width="120"> </m-table-column>
          <m-table-column prop="state" label="State" width="120"> </m-table-column>
          <m-table-column prop="city" label="City" width="120"> </m-table-column>
          <m-table-column prop="address" label="Address" width="300"> </m-table-column>
          <m-table-column prop="zip" label="Zip" width="120"> </m-table-column>
        </m-table>
      </m-card>
    `,
    data() {
      return {
        tableData: [
          {
            date: '2016-05-03',
            name: 'Tom',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            zip: 'CA 90036',
          },
          {
            date: '2016-05-02',
            name: 'Tom',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            zip: 'CA 90036',
          },
          {
            date: '2016-05-04',
            name: 'Tom',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            zip: 'CA 90036',
          },
          {
            date: '2016-05-01',
            name: 'Tom',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            zip: 'CA 90036',
          },
          {
            date: '2016-05-08',
            name: 'Tom',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            zip: 'CA 90036',
          },
          {
            date: '2016-05-06',
            name: 'Tom',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            zip: 'CA 90036',
          },
          {
            date: '2016-05-07',
            name: 'Tom',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            zip: 'CA 90036',
          },
        ],
      };
    },
    methods: {},
  }))
  .add('Fluid-height with fixed header (and columns)', () => ({
    template: html`
      <m-card style="width: 90rem; margin: 5rem;">
        <m-table :data="tableData" max-height="250">
          <m-table-column fixed prop="date" label="Date" width="150"> </m-table-column>
          <m-table-column prop="name" label="Name" width="120"> </m-table-column>
          <m-table-column prop="state" label="State" width="120"> </m-table-column>
          <m-table-column prop="city" label="City" width="120"> </m-table-column>
          <m-table-column prop="address" label="Address" width="300"> </m-table-column>
          <m-table-column prop="zip" label="Zip" width="120"> </m-table-column>
          <m-table-column fixed="right" label="Operations" width="120">
            <template slot-scope="scope">
              <m-button
                @click.native.prevent="deleteRow(scope.$index, tableData)"
                type="text"
                size="small"
              >
                Remove
              </m-button>
            </template>
          </m-table-column>
        </m-table>
      </m-card>
    `,
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
    },
    data() {
      return {
        tableData: [
          {
            date: '2016-05-03',
            name: 'Tom',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            zip: 'CA 90036',
          },
          {
            date: '2016-05-02',
            name: 'Tom',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            zip: 'CA 90036',
          },
          {
            date: '2016-05-04',
            name: 'Tom',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            zip: 'CA 90036',
          },
          {
            date: '2016-05-01',
            name: 'Tom',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            zip: 'CA 90036',
          },
          {
            date: '2016-05-08',
            name: 'Tom',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            zip: 'CA 90036',
          },
          {
            date: '2016-05-06',
            name: 'Tom',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            zip: 'CA 90036',
          },
          {
            date: '2016-05-07',
            name: 'Tom',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            zip: 'CA 90036',
          },
        ],
      };
    },
  }))
  .add('Grouping table head', () => ({
    template: html`
      <m-card style="width: 90rem; margin: 5rem;">
        <m-table :data="tableData">
          <m-table-column prop="date" label="Date" width="150"> </m-table-column>
          <m-table-column label="Delivery Info">
            <m-table-column prop="name" label="Name" width="120"> </m-table-column>
            <m-table-column label="Address Info">
              <m-table-column prop="state" label="State" width="120"> </m-table-column>
              <m-table-column prop="city" label="City" width="120"> </m-table-column>
              <m-table-column prop="address" label="Address" width="300"> </m-table-column>
              <m-table-column prop="zip" label="Zip" width="120"> </m-table-column>
            </m-table-column>
          </m-table-column>
        </m-table>
      </m-card>
    `,
    data() {
      return {
        tableData: [
          {
            date: '2016-05-03',
            name: 'Tom',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            zip: 'CA 90036',
          },
          {
            date: '2016-05-02',
            name: 'Tom',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            zip: 'CA 90036',
          },
          {
            date: '2016-05-04',
            name: 'Tom',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            zip: 'CA 90036',
          },
          {
            date: '2016-05-01',
            name: 'Tom',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            zip: 'CA 90036',
          },
          {
            date: '2016-05-08',
            name: 'Tom',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            zip: 'CA 90036',
          },
          {
            date: '2016-05-06',
            name: 'Tom',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            zip: 'CA 90036',
          },
          {
            date: '2016-05-07',
            name: 'Tom',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            zip: 'CA 90036',
          },
        ],
      };
    },
    methods: {},
  }))
  .add('Single select', () => ({
    template: html`
      <m-card style="width: 90rem; margin: 5rem;">
        <m-table
          ref="singleTable"
          :data="tableData"
          highlight-current-row
          @current-change="handleCurrentChange"
        >
          <m-table-column type="index" width="50"> </m-table-column>
          <m-table-column property="date" label="Date" width="120"> </m-table-column>
          <m-table-column property="name" label="Name" width="120"> </m-table-column>
          <m-table-column property="address" label="Address"> </m-table-column>
        </m-table>
        <div style="margin-top: 20px">
          <m-button @click="setCurrent(tableData[1])">Select second row</m-button>
          <m-button @click="setCurrent()">Clear selection</m-button>
        </div>
      </m-card>
    `,
    data() {
      return {
        tableData: [
          {
            date: '2016-05-03',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
          {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
          {
            date: '2016-05-04',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
          {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
        ],
        currentRow: null,
      };
    },

    methods: {
      setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row);
      },
      handleCurrentChange(val) {
        this.currentRow = val;
      },
    },
  }))
  .add('Multiple select', () => ({
    template: html`
      <m-card style="width: 90rem; margin: 5rem;">
        <m-table
          ref="multipleTable"
          :data="tableData"
          @selection-change="handleSelectionChange"
        >
          <m-table-column type="selection" width="55"> </m-table-column>
          <m-table-column label="Date" width="120">
            <template slot-scope="scope"
              >{{ scope.row.date }}</template
            >
          </m-table-column>
          <m-table-column property="name" label="Name" width="120"> </m-table-column>
          <m-table-column property="address" label="Address" show-overflow-tooltip>
          </m-table-column>
        </m-table>
        <div style="margin-top: 20px">
          <m-button @click="toggleSelection([tableData[1], tableData[2]])"
            >Toggle selection status of second and third rows</m-button
          >
          <m-button @click="toggleSelection()">Clear selection</m-button>
        </div>
      </div>
      </m-card>
    `,
    data() {
      return {
        tableData: [
          {
            date: '2016-05-03',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
          {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
          {
            date: '2016-05-04',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
          {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
          {
            date: '2016-05-08',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
          {
            date: '2016-05-06',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
          {
            date: '2016-05-07',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
        ],
        multipleSelection: [],
      };
    },
    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach((row) => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
    },
  }))
  .add('Sorting', () => ({
    template: html`
      <m-card style="width: 90rem; margin: 5rem;">
        <m-table
          :data="tableData"
          :default-sort="{prop: 'date', order: 'descending'}"
          style="width: 100%"
        >
          <m-table-column prop="date" label="Date" sortable width="180"> </m-table-column>
          <m-table-column prop="name" label="Name" width="180"> </m-table-column>
          <m-table-column prop="address" label="Address" :formatter="formatter"> </m-table-column>
        </m-table>
      </m-card>
    `,
    data() {
      return {
        tableData: [
          {
            date: '2016-05-03',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
          {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
          {
            date: '2016-05-04',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
          {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
        ],
      };
    },
    methods: {
      formatter(row, column) {
        return row.address;
      },
    },
  }))
  .add('Filter', () => ({
    template: html`
      <m-card style="width: 90rem; margin: 5rem;">
        <m-button @click="resetDateFilter">Reset Date Filter</m-button>
        <m-button @click="clearFilter">Reset All Filters</m-button>
        <m-table ref="filterTable" :data="tableData" style="width: 100%">
          <m-table-column
            prop="date"
            label="Date"
            sortable
            width="180"
            column-key="date"
            :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
            :filter-method="filterHandler"
          >
          </m-table-column>
          <m-table-column prop="name" label="Name" width="180" />
          <m-table-column prop="address" label="Address" :formatter="formatter" />
          <m-table-column
            prop="tag"
            label="Tag"
            width="100"
            :filters="[{ text: 'Home', value: 'Home' }, { text: 'Office', value: 'Office' }]"
            :filter-method="filterTag"
            filter-placement="bottom-end"
          >
            <template slot-scope="scope" v-if="!!scope.row">
              <m-button size="mini" type="danger">{{ scope.row.tag }}</m-button>
            </template>
          </m-table-column>
        </m-table>
      </m-card>
    `,
    mounted() {},
    data() {
      return {
        tableData: [
          {
            date: '2016-05-03',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
            tag: 'Home',
          },
          {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
            tag: 'Office',
          },
          {
            date: '2016-05-04',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
            tag: 'Home',
          },
          {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
            tag: 'Office',
          },
        ],
      };
    },
    methods: {
      resetDateFilter() {
        this.$refs.filterTable.clearFilter('date');
      },
      clearFilter() {
        this.$refs.filterTable.clearFilter();
      },
      formatter(row, column) {
        return row.address;
      },
      filterTag(value, row) {
        return row.tag === value;
      },
      filterHandler(value, row, column) {
        const { property } = column;
        return row[property] === value;
      },
    },
  }))
  .add('Custom column template', () => ({
    template: html`
      <m-card style="width: 90rem; margin: 5rem;">
        <m-table :data="tableData">
          <m-table-column label="Date" width="180">
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
          </m-table-column>
          <m-table-column label="Name" width="180">
            <template slot-scope="scope">
              <m-popover trigger="hover" placement="top">
                <p>Name: {{ scope.row.name }}</p>
                <p>Addr: {{ scope.row.address }}</p>
                <div slot="reference" style="display: inline-block;">
                  <m-tag size="medium">{{ scope.row.name }}</m-tag>
                </div>
              </m-popover>
            </template>
          </m-table-column>
          <m-table-column label="Operations">
            <template slot-scope="scope">
              <m-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</m-button>
              <m-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)"
                >Delete</m-button
              >
            </template>
          </m-table-column>
        </m-table>
      </m-card>
    `,
    data() {
      return {
        tableData: [
          {
            date: '2016-05-03',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
          {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
          {
            date: '2016-05-04',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
          {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
        ],
      };
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
    },
  }));
