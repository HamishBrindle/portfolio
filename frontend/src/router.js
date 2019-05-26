import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import store from '@/store';
import {
  USER_UPDATE, BREADCRUMBS, TABS, NAVIGATION_INDEX, ROUTE,
} from '@/store/types/actions.js';
import { apolloClient } from '@/apollo';
import gql from 'graphql-tag';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import(/* webpackChunkName: "chunk-views-projects" */ '@/views/Projects.vue'),
    meta: {
      index: '0',
    },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "chunk-views-about" */ '@/views/About.vue'),
    meta: {
      index: '1',
    },
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "chunk-views-contact" */ '@/views/Contact.vue'),
    meta: {
      index: '2',
    },
  },
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
];

const dashboardRoutes = [
  {
    path: '/dashboard',
    component: () => import(/* webpackChunkName: "chunk-views-dashboard" */ '@/views/Dashboard'),
    meta: {
      breadcrumb: { label: 'Dashboard', route: 'dashboard' },
      requiresAuth: true,
    },
    children: [
      {
        path: '',
        name: 'dashboard',
        component: () => import(/* webpackChunkName: "chunk-views-dashboard" */ '@/views/Dashboard/Home.vue'),
        meta: {
          breadcrumb: { label: 'Home', route: 'dashboard' },
          requiresAuth: true,
          icon: 'home',
          index: '0',
        },
      },
      {
        path: '',
        component: () => import(/* webpackChunkName: "chunk-views-dashboard-projects" */ '@/views/Dashboard/Projects'),
        meta: {
          breadcrumb: { label: 'Projects', route: 'dashboard-projects' },
          requiresAuth: true,
          icon: 'star',
          index: '1',
          tabs: [
            { label: 'Overview', route: 'dashboard-projects', index: '1-0' },
            { label: 'List', route: 'dashboard-projects-list', index: '1-1' },
            { label: 'Add', route: 'dashboard-projects-add', index: '1-2' },
            // { label: 'List', route: 'dashboard-projects-list', index: '1-2' },
          ],
        },
        children: [
          {
            path: 'projects',
            name: 'dashboard-projects',
            component: () => import(/* webpackChunkName: "chunk-views-dashboard-projects" */ '@/views/Dashboard/Projects/Overview.vue'),
            meta: {
              // breadcrumb: { label: 'List', route: 'dashboard-projects-list' },
              requiresAuth: true,
              index: '1-0',
            },
          },
          {
            path: 'projects/list',
            name: 'dashboard-projects-list',
            component: () => import(/* webpackChunkName: "chunk-views-dashboard-projects" */ '@/views/Dashboard/Projects/List.vue'),
            meta: {
              breadcrumb: { label: 'List', route: 'dashboard-projects-list' },
              requiresAuth: true,
              index: '1-1',
            },
          },
          {
            path: 'projects/add',
            name: 'dashboard-projects-add',
            component: () => import(/* webpackChunkName: "chunk-views-dashboard-projects" */ '@/views/Dashboard/Projects/Add.vue'),
            meta: {
              breadcrumb: { label: 'Add', route: 'dashboard-projects-add' },
              requiresAuth: true,
              index: '1-2',
            },
          },
        ],
      },
    ],
  },
];

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: dashboardRoutes.concat(routes),
});

router.beforeEach(async (to, from, next) => {
  const currentRoute = to.name;
  if (currentRoute) {
    store.dispatch(ROUTE, currentRoute);
  }

  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Using authentication token stored in cookies,
    // we send off query for the currently active user.
    const { data } = await apolloClient.query({
      query: gql`
      query currentUser {
        currentUser {
          id
          name
          email
          permissions
          lastLoggedIn
        }
      }
      `,
      variables: {},
    });

    console.log(data);

    if (!data.currentUser) {
      next({ name: 'login' });
      return false;
    }

    const {
      id, name, email, permissions, lastLoggedIn,
    } = data.currentUser;

    store.dispatch(USER_UPDATE, {
      id, name, email, permissions, lastLoggedIn,
    }).then(() => {
      next();
    });

    return true;
  }

  next();
  return true;
});

router.afterEach((to) => {
  // TODO: Clean this up no need to filter each time
  const matchedMeta = to.matched.filter(route => route.meta);

  const matchedIndex = matchedMeta.filter(route => route.meta.index);
  if (matchedIndex && matchedIndex.length > 0) {
    // We only need top-most route for displaying current
    // navigation index
    store.dispatch(NAVIGATION_INDEX, matchedIndex[0].meta.index.toString());
  } else {
    store.dispatch(NAVIGATION_INDEX, '-1');
  }

  const matchedBreadcrumbs = matchedMeta
    .filter(item => item.meta && !item.meta.isSubnav && item.meta.breadcrumb);
  if (matchedBreadcrumbs) {
    // Some breadcrumbs shouldn't be stored globally because
    // we only need them to render in specific sub-views, so
    // we check for `isSubnav`
    const breadcrumbs = matchedBreadcrumbs
      .map(item => item.meta.breadcrumb);
    store.dispatch(BREADCRUMBS, breadcrumbs);
  } else {
    store.dispatch(BREADCRUMBS, []);
  }

  const matchedTabs = matchedMeta
    .filter(item => item.meta.tabs);
  if (matchedTabs) {
    const tabs = matchedTabs
      .map(item => item.meta.tabs);
    store.dispatch(TABS, (tabs && tabs[tabs.length - 1]) || []);
  } else {
    store.dispatch(TABS, []);
  }
});

export default router;
