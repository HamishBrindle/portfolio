import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

const path = require('path');

Vue.use(Vuex);

/**
 * Register store modules.
 *
 * Anything inside `@/store/modules` will be loaded
 * into Vuex.
 */
const requireModule = require.context(
  './modules',
  true,
  /[a-zA-Z]\w+\.(ts|js)$/,
);

const modules = {};

requireModule.keys().forEach((fileName) => {
  const moduleConfig = requireModule(fileName);
  const moduleName = path.basename(fileName).replace(/^(.*)\.\w+$/, '$1');
  modules[moduleName] = moduleConfig.default || moduleConfig;
});

export default new Vuex.Store({
  strict: true, // Prevent direct mutation of state
  plugins: [createPersistedState()],
  modules,
});
