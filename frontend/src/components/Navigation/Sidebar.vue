<template>
  <m-menu
    :default-active="activeIndex"
    class="m-sidebar m-menu-vertical"
    :collapse="!navbarOpen"
    @open="onSidebarOpen"
    @close="onSidebarClose"
    @select="onSidebarSelect"
  >
    <m-nav-item
      v-for="link in siteLinks"
      :key="link.index"
      :index="link.index"
      :to="{ name: link.route }"
      :children="link.children || []"
    >
      <div>
        <m-icon
          :name="link.icon"
          class="m-sidebar__link-icon"
        />
        <span
          slot="title"
          class="m-sidebar__link-text"
        >{{ link.label }}</span>
      </div>
    </m-nav-item>
  </m-menu>
</template>

<script>
import navigationMixin from '@/mixins/navigation.js';

export default {
  name: 'MSidebar',
  componentName: 'MSidebar',
  components: {
    'm-menu': () => import(/* webpackChunkName: "chunk-components-menu" */ '@/components/Menu/Menu.vue'),
    'm-nav-item': () => import(/* webpackChunkName: "chunk-components-navigation" */ '@/components/Navigation/NavItem.vue'),
  },
  mixins: [navigationMixin],
  methods: {
    onSidebarSelect() {
      this.navbarOpen = false;
    },
    onSidebarOpen(event) {
      this.$emit('open', event);
    },
    onSidebarClose(event) {
      this.$emit('close', event);
    },
  },
};
</script>

<style lang="scss">
  .m-sidebar {
    &__link-icon {
      margin-right: 1rem;
    }
    .m-menu-item {
      padding: 0 !important;
      .m-nav-item__link {
        padding: 0 2rem;
        width: 100%;
      }
    }
    .m-menu-item.is-active {
      font-weight: 600;
      .m-sidebar__link-icon {
        color: map-get($colors, primary);
      }
    }
  }

  .m-menu-vertical:not(.el-menu--collapse) {
    width: 30rem;
    min-height: 40rem;
  }
</style>
