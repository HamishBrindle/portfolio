<template>
  <div class="default-layout">
    <m-navbar
      class="default-layout__navbar"
    />
    <m-scrollbar class="default-layout__scrollbar">
      <m-container
        direction="horizontal"
        class="default-layout__body"
      >
        <div
          :class="`default-layout__overlay ${(asideOpen) ? 'default-layout__overlay--show' : ''}`"
        />
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
    </m-scrollbar>
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
    renderOverlay() {
      return this.asideOpen && this.windowDimensions.width <= parseBreakpoint(styles['breakpoint-md']);
    },
  },
};
</script>

<style lang="scss">
$sidebarWidth: 6.4rem;
$navbarHeight: 6rem;

.default-layout {
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: $navbarHeight 1fr;
  &__scrollbar {
    .el-scrollbar__wrap {
      overflow-x: hidden;
    }
  }
  &__overlay {
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0;
    position: fixed;
    pointer-events: none;
    z-index: 5;
    transition: map-get($transitions, fade);
    &--show {
      opacity: 0.3;
    }
  }
  &__main {
    overflow-x: hidden;
    display: flex;
    justify-content: center;
    transition: map-get($transitions, mdFade);
  }
  &__main-content {
    width: 100%;
    max-width: 144rem;
  }
  &__navbar {
    width: 100%;
    z-index: 9000;
  }
  &__body {
    /* margin-top: $navbarHeight; */
    display: flex;
    flex-direction: row;
    overflow-x: none;
  }
  &__side {
    height: 100%;
    z-index: 3000;
    .m-sidebar.m-menu > .m-menu-item > .m-nav-item__link .m-sidebar__link-text {
      transition: map-get($transitions, fade);
      transition-delay: 100ms;
      opacity: 1;
    }
    &--collapse {
      .m-sidebar.m-menu > .m-menu-item > .m-nav-item__link .m-sidebar__link-text {
        opacity: 0;
      }
    }
    .m-sidebar {
      height: 100%;
    }
  }
}
@media screen and (max-width: map-get($breakpoints, xs)) {
  .default-layout {
    &__side {
      transition: map-get($transitions, mdFade);
      &--collapse {
        margin-left: -$sidebarWidth;
      }
    }
    &__main {
      margin-left: $sidebarWidth !important;
    }
  }
}
@media screen and (max-width: map-get($breakpoints, md)) {
  .default-layout {
    &__main {
      margin-left: $sidebarWidth;
    }
  }
}
</style>
