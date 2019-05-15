import links from '@/components/Navigation/nav-links.js';
import { mapActions, mapGetters } from 'vuex';
import { NAVIGATION_INDEX, NAVIGATION_OPEN } from '@/store/types/actions.js';
import {
  GET_NAVIGATION_OPEN,
  GET_NAVIGATION_INDEX,
} from '@/store/types/getters.js';

const navigationMixin = {
  data() {
    return {
      siteLinks: links,
    };
  },
  computed: {
    ...mapGetters({
      getNavigationOpen: GET_NAVIGATION_OPEN,
      getNavigationIndex: GET_NAVIGATION_INDEX,
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
  },
  methods: {
    ...mapActions({
      navigationIndex: NAVIGATION_INDEX,
      navigationOpen: NAVIGATION_OPEN,
    }),
  },
};

export default navigationMixin;
