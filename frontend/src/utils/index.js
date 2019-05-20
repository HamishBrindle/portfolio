const path = require('path');

/**
 * Register base modules.
 *
 * Anything inside `@/utils/modules` will be loaded
 * and export as a single object.
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

export default modules;
