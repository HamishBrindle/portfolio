<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import { WINDOW_DIMENSIONS } from '@/store/types/actions.js';

export default {
  name: 'App',
  computed: {
    /**
     * Layout components defined and loaded in `main.js`
     */
    layout() {
      const which = this.$route.meta.layout || 'app';
      return `${which}-layout`;
    },
  },
  created() {
    window.addEventListener('resize', this.onWindowResize);
    this.onWindowResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.onWindowResize);
  },
  methods: {
    onWindowResize() {
      this.$store.dispatch(WINDOW_DIMENSIONS, {
        width: window.innerWidth,
        height: window.innerHeight,
      });
    },
  },
};
</script>

<style lang="scss">
@import "assets/styles/main.scss";
html {
  height: 100%;
}
#app {
  height: 100%;
}
</style>
