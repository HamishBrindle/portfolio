import Vue from 'vue';
import path from 'path';
import App from '@/App.vue';
import AppLayout from '@/layouts/AppLayout.vue';
import FullScreenLayout from '@/layouts/FullScreenLayout.vue';
import router from '@/router';
import store from '@/store';
import axios from '@/plugins/axios.js';
import element from '@/plugins/element.js';
import cookies from '@/plugins/cookies.js';
// import sentry from './plugins/sentry'; // For staged eventually
import utils from '@/utils';
import apolloProvider from '@/apollo';

// Vue.use(sentry);
Vue.use(axios);
Vue.use(element);
Vue.use(cookies);

Vue.config.productionTip = false;

Vue.component('app-layout', AppLayout);
Vue.component('full-screen-layout', FullScreenLayout);

/**
 * Register base components.
 *
 * Anything inside `@/components/Base` will be loaded
 * globally - no need to import them.
 */
const requireComponent = require.context(
  './components/Base',
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

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App),
}).$mount('#app');
