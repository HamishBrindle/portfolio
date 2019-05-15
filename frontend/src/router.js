import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import store from '@/store';
import {
  USER_UPDATE, BREADCRUMBS, TABS, NAVIGATION_INDEX,
} from '@/store/types/actions.js';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import(/* webpackChunkName: "chunk-views-dashboard" */ '@/views/Dashboard.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "chunk-views-about" */ '@/views/About.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import(/* webpackChunkName: "chunk-views-contact" */ '@/views/Contact.vue'),
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import(/* webpackChunkName: "chunk-views-projects" */ '@/views/Projects.vue'),
    },

    // {
    //   path: '/customers',
    //   component: () => import(/* webpackChunkName: "chunk-views-customers" */ '@/views/Customers'),
    //   meta: {
    //     breadcrumb: { label: 'Customers', route: 'customers' },
    //     icon: 'users',
    //     requiresAuth: true,
    //     index: '5',
    //   },
    //   children: [
    //     {
    //       path: '',
    //       name: 'customers',
    //       component: () => import(/* webpackChunkName: "chunk-views-customers" */ '@/views/Customers/List.vue'),
    //       meta: {
    //         breadcrumb: { label: 'List', route: 'customers' },
    //         icon: 'users',
    //         requiresAuth: true,
    //       },
    //     },
    //     {
    //       path: 'view/:uid',
    //       name: 'customers-view',
    //       component: () => import(/* webpackChunkName: "chunk-views-customers" */ '@/views/Customers/View'),
    //       meta: {
    //         breadcrumb: { label: 'View & Edit', route: 'customers-view' },
    //         tabs: [
    //           { label: 'Address', route: 'customers-view-address', index: '1' },
    //           { label: 'Tax, Terms & Pricelists', route: 'customers-view-tax-terms-pricelist', index: '2' },
    //           { label: 'Order History', route: 'customers-view-order-history', index: '3' },
    //           { label: 'Shop Access', route: 'customers-view-shop-access', index: '4' },
    //           { label: 'Activate Account', route: 'customers-view-activate-account', index: '5' },
    //         ],
    //         icon: 'users',
    //         requiresAuth: true,
    //       },
    //       children: [
    //         {
    //           path: '/customers/view/:uid/address',
    //           name: 'customers-view-address',
    //           component: () => import(/* webpackChunkName: "chunk-views-customers" */ '@/views/Customers/View/Address.vue'),
    //           meta: {
    //             breadcrumb: { label: 'Address', route: 'customers-view-address' },
    //             isSubnav: true,
    //             requiresAuth: true,
    //           },
    //         },
    //       ],
    //     },
    //   ],
    // },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "chunk-views-login" */ '@/views/Login.vue'),
      meta: {
        layout: 'full-screen',
      },
    },
    {
      path: '*',
      name: '404',
      component: () => import(/* webpackChunkName: "chunk-views-notFound" */ '@/views/NotFound.vue'),
      meta: {
        layout: 'full-screen',
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    store.dispatch(USER_UPDATE);
    const { auth } = store.state.user;

    // TODO: Need roles and better gaurding
    if (!auth || !auth.token) {
      next({ name: 'login' });
      return false;
    }

    next();
    return true;
  }

  next();
  return true;
});

router.afterEach((to) => {
  const matchedIndex = to.matched.filter(route => route.meta && route.meta.index);
  if (matchedIndex && matchedIndex.length > 0) {
    // We only need top-most route for displaying current
    // navigation index
    store.dispatch(NAVIGATION_INDEX, matchedIndex[0].meta.index.toString());
  } else {
    store.dispatch(NAVIGATION_INDEX, '-1');
  }

  if (to.meta.breadcrumb) {
    const matchedBreadcrumbs = to.matched.filter(item => item.meta);
    if (!matchedBreadcrumbs) return;
    // Some breadcrumbs shouldn't be stored globally because
    // we only need them to render in specific sub-views, so
    // we check for `isSubnav`
    const breadcrumbs = matchedBreadcrumbs
      .filter(item => item.meta && !item.meta.isSubnav && item.meta.breadcrumb)
      .map(item => item.meta.breadcrumb);
    store.dispatch(BREADCRUMBS, breadcrumbs);
  } else {
    store.dispatch(BREADCRUMBS, []);
  }

  if (to.meta.tabs) {
    const matchedTabs = to.matched.filter(item => item.meta);
    if (!matchedTabs) return;
    const tabs = matchedTabs
      .filter(item => item.meta && item.meta.tabs)
      .map(item => item.meta.tabs);
    store.dispatch(TABS, tabs);
  } else {
    store.dispatch(TABS, []);
  }
});

export default router;
