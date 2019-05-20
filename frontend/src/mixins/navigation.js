import links, { dashboardLinks } from '@/config/navigation.js';
import { mapActions, mapGetters } from 'vuex';
import { NAVIGATION_INDEX, NAVIGATION_OPEN } from '@/store/types/actions.js';
import {
  GET_NAVIGATION_OPEN,
  GET_NAVIGATION_INDEX,
  GET_ROUTE,
} from '@/store/types/getters.js';

const navigationMixin = {
  computed: {
    ...mapGetters({
      getNavigationOpen: GET_NAVIGATION_OPEN,
      getNavigationIndex: GET_NAVIGATION_INDEX,
      getRoute: GET_ROUTE,
    }),
    activeIndex: {
      get() {
        return this.getNavigationIndex;
      },
      set(index) {
        this.navigationIndex(index);
      },
    },
    navbarOpen: {
      get() {
        return this.getNavigationOpen;
      },
      set(open) {
        this.navigationOpen(open);
      },
    },
    siteLinks() {
      return (this.isDashboard(this.getRoute)) ? dashboardLinks : links;
    },
  },
  methods: {
    ...mapActions({
      navigationIndex: NAVIGATION_INDEX,
      navigationOpen: NAVIGATION_OPEN,
    }),
    isDashboard(route) {
      console.log(route);
      return route.includes('dashboard');
    },
  },
};

export default navigationMixin;
