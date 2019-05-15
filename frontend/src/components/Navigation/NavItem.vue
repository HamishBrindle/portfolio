<template>
  <!-- If no sub-levels -->
  <m-menu-item
    v-if="!children || children.length === 0"
    class="m-nav-item"
    :index="index"
  >
    <m-link
      :to="to"
      tag="div"
      class="m-nav-item__link"
    >
      <slot />
    </m-link>
  </m-menu-item>

  <!-- For nested items -->
  <m-submenu
    v-else
    :index="index"
  >
    <template slot="title">
      <slot />
    </template>
    <m-nav-item
      v-for="child in children"
      :key="child.key"
      :children="child.children || []"
      :to="{ name: child.route }"
      :index="child.index"
    >
      {{ child.label }}
    </m-nav-item>
  </m-submenu>
</template>

<script>
export default {
  name: 'MNavItem',
  componentName: 'MNavItem',
  components: {
    'm-menu-item': () => import(/* webpackChunkName: "chunk-components-menu" */ '@/components/Menu/MenuItem.vue'),
    'm-submenu': () => import(/* webpackChunkName: "chunk-components-menu" */ '@/components/Menu/Submenu.vue'),
  },
  props: {
    index: String,
    to: {
      type: Object,
      default: () => ({ name: 'home' }),
    },
    children: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss">
.m-navbar {
  .m-nav-item {
    padding: 0;
    &__link {
      padding: 0 2rem;
      display: inline-block;
      width: 100%;
    }
  }
}
</style>
