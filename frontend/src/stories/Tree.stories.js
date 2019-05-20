/* eslint-disable no-unused-vars */
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import utils from '@/utils';

const html = utils.string.tag;

storiesOf('Tree', module)
  .add('Basic', () => ({
    template: html`
      <m-card>
        <m-tree :data="data" @node-click="handleNodeClick"></m-tree>
      </m-card>
    `,
    data() {
      return {
        data: [
          {
            label: 'Level one 1',
            children: [
              {
                label: 'Level two 1-1',
                children: [
                  {
                    label: 'Level three 1-1-1',
                  },
                ],
              },
            ],
          },
          {
            label: 'Level one 2',
            children: [
              {
                label: 'Level two 2-1',
                children: [
                  {
                    label: 'Level three 2-1-1',
                  },
                ],
              },
              {
                label: 'Level two 2-2',
                children: [
                  {
                    label: 'Level three 2-2-1',
                  },
                ],
              },
            ],
          },
          {
            label: 'Level one 3',
            children: [
              {
                label: 'Level two 3-1',
                children: [
                  {
                    label: 'Level three 3-1-1',
                  },
                ],
              },
              {
                label: 'Level two 3-2',
                children: [
                  {
                    label: 'Level three 3-2-1',
                  },
                ],
              },
            ],
          },
        ],
      };
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      },
    },
  }))
  .add('Selectable', () => ({
    template: html`
      <m-card
        ><m-tree
          :props="props"
          :load="loadNode"
          lazy
          show-checkbox
          @check-change="handleCheckChange"
        >
        </m-tree
      ></m-card>
    `,
    data() {
      return {
        props: {
          label: 'name',
          children: 'zones',
        },
        count: 1,
      };
    },
    methods: {
      handleCheckChange(data, checked, indeterminate) {
        console.log(data, checked, indeterminate);
      },
      handleNodeClick(data) {
        console.log(data);
      },
      loadNode(node, resolve) {
        if (node.level === 0) {
          return resolve([{ name: 'Root1' }, { name: 'Root2' }]);
        }
        if (node.level > 3) return resolve([]);

        let hasChild;
        if (node.data.name === 'region1') {
          hasChild = true;
        } else if (node.data.name === 'region2') {
          hasChild = false;
        } else {
          hasChild = Math.random() > 0.5;
        }
        return setTimeout(() => {
          let data;
          if (hasChild) {
            data = [
              {
                name: `zone${this.count++}`,
              },
              {
                name: `zone${this.count++}`,
              },
            ];
          } else {
            data = [];
          }

          return resolve(data);
        }, 500);
      },
    },
  }))
  .add('Custom leaf node in lazy mode', () => ({
    template: html`
      <m-card><m-tree :props="props" :load="loadNode1" lazy show-checkbox></m-tree></m-card>
    `,
    data() {
      return {
        props: {
          label: 'name',
          children: 'zones',
          isLeaf: 'leaf',
        },
      };
    },
    methods: {
      loadNode1(node, resolve) {
        if (node.level === 0) {
          return resolve([{ name: 'region' }]);
        }
        if (node.level > 1) return resolve([]);

        return setTimeout(() => {
          const data = [
            {
              name: 'leaf',
              leaf: true,
            },
            {
              name: 'zone',
            },
          ];

          resolve(data);
        }, 500);
      },
    },
  }))
  .add('Disabled checkbox', () => ({
    template: html`
    <m-card>
      <m-tree
        :data="data"
        :props="defaultProps"
        show-checkbox
        @check-change="handleCheckChange">
      </m-tree>
    </m-card>
    `,
    data() {
      return {
        data: [{
          id: 1,
          label: 'Level one 1',
          children: [{
            id: 3,
            label: 'Level two 2-1',
            children: [{
              id: 4,
              label: 'Level three 3-1-1',
            }, {
              id: 5,
              label: 'Level three 3-1-2',
              disabled: true,
            }],
          }, {
            id: 2,
            label: 'Level two 2-2',
            disabled: true,
            children: [{
              id: 6,
              label: 'Level three 3-2-1',
            }, {
              id: 7,
              label: 'Level three 3-2-2',
              disabled: true,
            }],
          }],
        }],
        defaultProps: {
          children: 'children',
          label: 'label',
          disabled: 'disabled',
        },
      };
    },
  }))
  .add('Default expanded and default checked', () => ({
    template: html`
    <m-card>
      <m-tree
        :data="data"
        show-checkbox
        node-key="id"
        :default-expanded-keys="[2, 3]"
        :default-checked-keys="[5]"
        :props="defaultProps">
      </m-tree>
    </m-card>
    `,
    data() {
      return {
        data: [{
          id: 1,
          label: 'Level one 1',
          children: [{
            id: 4,
            label: 'Level two 1-1',
            children: [{
              id: 9,
              label: 'Level three 1-1-1',
            }, {
              id: 10,
              label: 'Level three 1-1-2',
            }],
          }],
        }, {
          id: 2,
          label: 'Level one 2',
          children: [{
            id: 5,
            label: 'Level two 2-1',
          }, {
            id: 6,
            label: 'Level two 2-2',
          }],
        }, {
          id: 3,
          label: 'Level one 3',
          children: [{
            id: 7,
            label: 'Level two 3-1',
          }, {
            id: 8,
            label: 'Level two 3-2',
          }],
        }],
        defaultProps: {
          children: 'children',
          label: 'label',
        },
      };
    },
  }))
  .add('Checking tree nodes', () => ({
    template: html`
    <m-card>
      <m-tree
        :data="data"
        show-checkbox
        default-expand-all
        node-key="id"
        ref="tree"
        highlight-current
        :props="defaultProps">
      </m-tree>

      <div style="display: flex; flex-wrap: wrap;">
        <m-button @click="getCheckedNodes">get by node</m-button>
        <m-button @click="getCheckedKeys">get by key</m-button>
        <m-button @click="setCheckedNodes">set by node</m-button>
        <m-button @click="setCheckedKeys">set by key</m-button>
        <m-button @click="resetChecked">reset</m-button>
      </div>
    </m-card>
    `,
    methods: {
      getCheckedNodes() {
        console.log(this.$refs.tree.getCheckedNodes());
      },
      getCheckedKeys() {
        console.log(this.$refs.tree.getCheckedKeys());
      },
      setCheckedNodes() {
        this.$refs.tree.setCheckedNodes([{
          id: 5,
          label: 'Level two 2-1',
        }, {
          id: 9,
          label: 'Level three 1-1-1',
        }]);
      },
      setCheckedKeys() {
        this.$refs.tree.setCheckedKeys([3]);
      },
      resetChecked() {
        this.$refs.tree.setCheckedKeys([]);
      },
    },

    data() {
      return {
        data: [{
          id: 1,
          label: 'Level one 1',
          children: [{
            id: 4,
            label: 'Level two 1-1',
            children: [{
              id: 9,
              label: 'Level three 1-1-1',
            }, {
              id: 10,
              label: 'Level three 1-1-2',
            }],
          }],
        }, {
          id: 2,
          label: 'Level one 2',
          children: [{
            id: 5,
            label: 'Level two 2-1',
          }, {
            id: 6,
            label: 'Level two 2-2',
          }],
        }, {
          id: 3,
          label: 'Level one 3',
          children: [{
            id: 7,
            label: 'Level two 3-1',
          }, {
            id: 8,
            label: 'Level two 3-2',
          }],
        }],
        defaultProps: {
          children: 'children',
          label: 'label',
        },
      };
    },
  }));
