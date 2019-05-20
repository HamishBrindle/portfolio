<template>
  <m-container direction="vertical">
    <m-header>
      <m-crumbnav />
    </m-header>
    <m-main>
      <template>
        <transition
          name="fade"
          mode="out-in"
        >
          <router-view />
        </transition>
      </template>
    </m-main>
  </m-container>
</template>

<script>
export default {
  name: 'Dashboard',
  componentName: 'Dashboard',
  components: {
    'm-crumbnav': () => import(/* webpackChunkName: "chunk-components-navigation" */ '@/components/Navigation/Crumbnav.vue'),
  },
};
</script>
