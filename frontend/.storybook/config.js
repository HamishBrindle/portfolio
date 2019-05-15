/* eslint-disable no-unused-vars */
/* eslint-disable import/no-webpack-loader-syntax */
import Vue from 'vue';
import { configure } from '@storybook/vue';
import element from '@/plugins/element.js';
import { addParameters } from '@storybook/vue';
import theme from './theme.js';
import '@/assets/styles/main.scss';
import utils from '@/utils';

const path = require('path');

addParameters({
  options: {
    theme: theme,
  },
});

/**
 * Install any plugins we need here
 */
Vue.use(element);

/**
 * Import components used in Storybook
 */
const requireComponent = require.context(
  '../src/components',
  true,
  /[A-Z]\w+\.(vue|js)$/,
);
requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);
  const componentName = `m-${utils.string.toKebabCase(
    path.basename(fileName).replace(/^(.*)\.\w+$/, '$1'),
  )}`;

  Vue.component(
    componentName,
    componentConfig.default || componentConfig,
  );
});

/**
 * Loading up all story files
 */
const reqStories = require.context('../src', true, /.stories.js$/);
function loadStories() {
  reqStories.keys().forEach(filename => reqStories(filename));
}

configure(loadStories, module);
