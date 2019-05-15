/* eslint-disable no-unused-vars */
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import utils from '@/utils';

const html = utils.string.tag;

storiesOf('Menu', module)
  .add('Basic', () => ({
    template: html`
      <m-container>
        <m-menu
          :default-active="activeIndex"
          class="m-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <m-menu-item index="1">Processing Center</m-menu-item>
          <m-submenu index="2">
            <template slot="title">
              Workspace
            </template>
            <m-menu-item index="2-1">item one</m-menu-item>
            <m-menu-item index="2-2">item two</m-menu-item>
            <m-menu-item index="2-3">item three</m-menu-item>
            <m-submenu index="2-4">
              <template slot="title">
                item four
              </template>
              <m-menu-item index="2-4-1">item one</m-menu-item>
              <m-menu-item index="2-4-2">item two</m-menu-item>
              <m-menu-item index="2-4-3">item three</m-menu-item>
            </m-submenu>
          </m-submenu>
          <m-menu-item index="3" disabled>Info</m-menu-item>
          <m-menu-item index="4"
            ><a href="https://www.ele.me" target="_blank">Orders</a></m-menu-item
          >
        </m-menu>
        <div class="line"></div>
        <m-menu
          :default-active="activeIndex2"
          class="m-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <m-menu-item index="1">Processing Center</m-menu-item>
          <m-submenu index="2">
            <template slot="title"
              >Workspace</template
            >
            <m-menu-item index="2-1">item one</m-menu-item>
            <m-menu-item index="2-2">item two</m-menu-item>
            <m-menu-item index="2-3">item three</m-menu-item>
            <m-submenu index="2-4">
              <template slot="title"
                >item four</template
              >
              <m-menu-item index="2-4-1">item one</m-menu-item>
              <m-menu-item index="2-4-2">item two</m-menu-item>
              <m-menu-item index="2-4-3">item three</m-menu-item>
            </m-submenu>
          </m-submenu>
          <m-menu-item index="3" disabled>Info</m-menu-item>
          <m-menu-item index="4"
            ><a href="https://www.ele.me" target="_blank">Orders</a></m-menu-item
          >
        </m-menu>
      </m-container>
    `,
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
    },
  }))
  .add('Sidebar', () => ({
    template: html`
      <m-container style="width: 50rem;">
        <m-row class="tac">
          <m-col :span="12">
            <h5>Default colors</h5>
            <m-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
            >
              <m-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>Navigator One</span>
                </template>
                <m-menu-item-group title="Group One">
                  <m-menu-item index="1-1">item one</m-menu-item>
                  <m-menu-item index="1-2">item one</m-menu-item>
                </m-menu-item-group>
                <m-menu-item-group title="Group Two">
                  <m-menu-item index="1-3">item three</m-menu-item>
                </m-menu-item-group>
                <m-submenu index="1-4">
                  <template slot="title">
                    item four
                  </template>
                  <m-menu-item index="1-4-1">item one</m-menu-item>
                </m-submenu>
              </m-submenu>
              <m-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span>Navigator Two</span>
              </m-menu-item>
              <m-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span>Navigator Three</span>
              </m-menu-item>
              <m-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span>Navigator Four</span>
              </m-menu-item>
            </m-menu>
          </m-col>
          <m-col :span="12">
            <h5>Custom colors</h5>
            <m-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
            >
              <m-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>Navigator One</span>
                </template>
                <m-menu-item-group title="Group One">
                  <m-menu-item index="1-1">item one</m-menu-item>
                  <m-menu-item index="1-2">item one</m-menu-item>
                </m-menu-item-group>
                <m-menu-item-group title="Group Two">
                  <m-menu-item index="1-3">item three</m-menu-item>
                </m-menu-item-group>
                <m-submenu index="1-4">
                  <template slot="title"
                    >item four</template
                  >
                  <m-menu-item index="1-4-1">item one</m-menu-item>
                </m-submenu>
              </m-submenu>
              <m-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span>Navigator Two</span>
              </m-menu-item>
              <m-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span>Navigator Three</span>
              </m-menu-item>
              <m-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span>Navigator Four</span>
              </m-menu-item>
            </m-menu>
          </m-col>
        </m-row>
      </m-container>
    `,
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
    },
  }))
  .add('Collapse', () => ({
    template: html`
      <m-container style="width: 50rem;">
        <m-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
          <m-radio-button :label="false">expand</m-radio-button>
          <m-radio-button :label="true">collapse</m-radio-button>
        </m-radio-group>
        <m-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
        >
          <m-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">Navigator One</span>
            </template>
            <m-menu-item-group>
              <span slot="title">Group One</span>
              <m-menu-item index="1-1">item one</m-menu-item>
              <m-menu-item index="1-2">item two</m-menu-item>
            </m-menu-item-group>
            <m-menu-item-group title="Group Two">
              <m-menu-item index="1-3">item three</m-menu-item>
            </m-menu-item-group>
            <m-submenu index="1-4">
              <span slot="title">item four</span>
              <m-menu-item index="1-4-1">item one</m-menu-item>
            </m-submenu>
          </m-submenu>
          <m-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">Navigator Two</span>
          </m-menu-item>
          <m-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">Navigator Three</span>
          </m-menu-item>
          <m-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">Navigator Four</span>
          </m-menu-item>
        </m-menu>
      </m-container>
    `,
    data() {
      return {
        isCollapse: true,
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
    },
  }));
