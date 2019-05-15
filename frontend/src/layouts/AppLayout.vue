<template>
  <div class="default-layout">
    <m-navbar
      class="default-layout__navbar"
    />
    <m-container
      direction="horizontal"
      class="default-layout__body"
    >
      <transition
        name="slide"
        mode="out-in"
      >
        <div
          v-if="showOverlay"
          class="default-layout__overlay"
        />
      </transition>

      <div :class="sidebarClassList">
        <m-sidebar />
      </div>
      <m-main class="default-layout__main">
        <div class="default-layout__main-content">
          <transition
            name="fade"
            mode="out-in"
          >
            <slot />
          </transition>
        </div>
      </m-main>
    </m-container>
  </div>
</template>

<script>
import styles from 'global-styles';
import { mapGetters } from 'vuex';
import {
  GET_NAVIGATION_OPEN,
  GET_WINDOW_DIMENSIONS,
} from '@/store/types/getters.js';

/**
 * Strips the 'px' at the end of the breakpoint width,
 * converts to number.
 */
const parseBreakpoint = breakpoint => parseFloat(breakpoint);

export default {
  components: {
    'm-navbar': () => import(/* webpackChunkName: "chunk-components-navbar" */ '@/components/Navigation/Navbar.vue'),
    'm-sidebar': () => import(/* webpackChunkName: "chunk-components-sidebar" */ '@/components/Navigation/Sidebar.vue'),
  },

  computed: {
    ...mapGetters({
      asideOpen: GET_NAVIGATION_OPEN,
      windowDimensions: GET_WINDOW_DIMENSIONS,
    }),
    sidebarClassList() {
      return [
        'hidden-md-and-up',
        'default-layout__side',
        (!this.asideOpen) ? 'default-layout__side--collapse' : '',
      ].join('\n');
    },
    showOverlay() {
      return this.asideOpen && this.windowDimensions.width <= parseBreakpoint(styles['breakpoint-md']);
    },
  },

};
</script>

<style lang="scss">
.default-layout {
  &__overlay {
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.3;
    position: fixed;
    pointer-events: none;
    z-index: 3;
  }
  &__main {
    overflow-x: hidden;
    display: flex;
    justify-content: center;
  }
  &__main-content {
    width: 100%;
    max-width: 144rem;
  }
  &__navbar {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9000;
  }
  &__body {
    padding-top: 6rem;
    display: flex;
    flex-direction: row;
    height: 100vh;
    overflow-x: none;
  }
  &__side {
    height: 100%;
    z-index: 3000;
    .m-sidebar {
      height: 100%;
    }
  }
  @media screen and (max-width: map-get($breakpoints, sm)) {
    &__side--collapse {
      transition: map-get($transitions, all);
      margin-left: -6.4rem;
    }
  }
}
</style>
