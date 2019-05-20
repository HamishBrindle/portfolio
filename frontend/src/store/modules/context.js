import {
  SET_NAVIGATION_OPEN,
  SET_NAVIGATION_INDEX,
  SET_WINDOW_DIMENSIONS,
  SET_BREADCRUMBS,
  SET_TABS,
  SET_ROUTE,
} from '@/store/types/mutations.js';
import {
  NAVIGATION_OPEN,
  NAVIGATION_INDEX,
  WINDOW_DIMENSIONS,
  BREADCRUMBS,
  TABS,
  ROUTE,
} from '@/store/types/actions.js';
import {
  GET_NAVIGATION_OPEN,
  GET_NAVIGATION_INDEX,
  GET_WINDOW_DIMENSIONS,
  GET_BREADCRUMBS,
  GET_TABS,
  GET_ROUTE,
} from '@/store/types/getters.js';

export default {
  state: {
    navbar: {
      open: false,
      activeIndex: '-1',
    },
    window: {
      width: 0,
      height: 0,
    },
    breadcrumbs: [],
    tabs: [],
    route: '',
  },
  mutations: {
    [SET_NAVIGATION_OPEN](state, open) {
      state.navbar.open = open;
    },
    [SET_NAVIGATION_INDEX](state, index) {
      state.navbar.activeIndex = index;
    },
    [SET_WINDOW_DIMENSIONS](state, { width, height }) {
      state.window.width = width;
      state.window.height = height;
    },
    [SET_BREADCRUMBS](state, breadcrumbs) {
      state.breadcrumbs = breadcrumbs;
    },
    [SET_TABS](state, tabs) {
      state.tabs = tabs;
    },
    [SET_ROUTE](state, route) {
      state.route = route;
    },
  },
  actions: {
    [NAVIGATION_OPEN]({ commit }, open) {
      commit(SET_NAVIGATION_OPEN, open);
    },
    [NAVIGATION_INDEX]({ commit }, index) {
      commit(SET_NAVIGATION_INDEX, index);
    },
    [WINDOW_DIMENSIONS]({ commit }, dimensions) {
      commit(SET_WINDOW_DIMENSIONS, dimensions);
    },
    [BREADCRUMBS]({ commit }, breadcrumbs) {
      commit(SET_BREADCRUMBS, breadcrumbs);
    },
    [TABS]({ commit }, tabs) {
      commit(SET_TABS, tabs);
    },
    [ROUTE]({ commit }, route) {
      commit(SET_ROUTE, route);
    },
  },
  getters: {
    [GET_NAVIGATION_OPEN]: state => state.navbar.open,
    [GET_NAVIGATION_INDEX]: state => state.navbar.activeIndex,
    [GET_WINDOW_DIMENSIONS]: state => state.window,
    [GET_BREADCRUMBS]: state => state.breadcrumbs,
    [GET_TABS]: state => state.tabs,
    [GET_ROUTE]: state => state.route,
  },
};
