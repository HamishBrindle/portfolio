<template>
  <div
    class="m-crumbnav__wrapper"
    transition="fade"
  >
    <m-icon
      v-if="!!icon"
      :name="icon"
      width="4"
      height="4"
      :color="iconColor"
    />
    <div class="m-crumbnav__bar">
      <div class="m-crumbnav__bar-left">
        <m-breadcrumb
          v-if="!!breadcrumbList"
          class="m-crumbnav"
        >
          <transition-group name="breadcrumb">
            <m-breadcrumb-item
              v-for="crumb of breadcrumbList"
              :key="crumb.label"
              :to="{ name: crumb.route }"
            >
              {{ crumb.label.toLowerCase() }}
            </m-breadcrumb-item>
          </transition-group>
        </m-breadcrumb>
      </div>
      <div class="m-crumbnav__bar-right">
        <!-- TODO: Get this working - somethings fucked. -->
        <!--
        <m-menu
          :default-active="activeIndex"
          mode="horizontal"
        >
          <m-menu-item
            v-for="tab in tabsList"
            :key="tab.index"
            :index="tab.index"
            :route="{ name: tab.route }"
          >
            {{ tab.label }}
          </m-menu-item>
        </m-menu>
        -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import styles from 'global-styles';

export default {
  name: 'MCrumbnav',
  componentName: 'MCrumbnav',
  components: {
    'm-breadcrumb': () => import(/* webpackChunkName: "chunk-components-breadcrumb" */ '@/components/Breadcrumb/Breadcrumb.vue'),
    'm-breadcrumb-item': () => import(/* webpackChunkName: "chunk-components-breadcrumb" */ '@/components/Breadcrumb/BreadcrumbItem.vue'),

    // eslint-disable-next-line vue/no-unused-components
    'm-menu': () => import(/* webpackChunkName: "chunk-components-menu" */ '@/components/Menu/Menu.vue'),
    // eslint-disable-next-line vue/no-unused-components
    'm-menu-item': () => import(/* webpackChunkName: "chunk-components-menu" */ '@/components/Menu/MenuItem.vue'),
  },
  data() {
    return {
      activeIndex: '0',
    };
  },
  computed: {
    ...mapState({
      breadcrumbList: state => state.context.breadcrumbs,
      tabsList: state => state.context.tabs,
    }),
    showBreadcrumb() {
      return !!this.breadcrumbList;
    },
    icon() {
      return (this.$route.matched
        && this.$route.matched[0]
        && this.$route.matched[0].meta
        && this.$route.matched[0].meta.icon)
        || null;
    },
    iconColor() {
      return styles['color-textPrimary'];
    },
  },
};
</script>

<style lang="scss">
.m-crumbnav {
  font-size: 1.8rem;
  &__wrapper {
    display: flex;
    align-items: center;
    *:not(:last-child) {
      margin-right: 1rem;
    }
  }
  &__bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
}
</style>
