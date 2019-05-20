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
        <m-menu
          :default-active="activeTab"
          mode="horizontal"
          :background-color="bgColor"
          :text-color="textColor"
          :active-text-color="activeTextColor"
        >
          <m-nav-item
            v-for="tab in tabsList"
            :key="tab.index"
            :index="tab.index"
            :to="{ name: tab.route }"
          >
            {{ tab.label }}
          </m-nav-item>
        </m-menu>
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

    'm-menu': () => import(/* webpackChunkName: "chunk-components-menu" */ '@/components/Menu/Menu.vue'),
    'm-nav-item': () => import(/* webpackChunkName: "chunk-components-navigation" */ '@/components/Navigation/NavItem.vue'),
  },
  data() {
    return {
      bgColor: styles['color-wht'],
      textColor: styles['color-textRegular'],
      activeTextColor: styles['color-primary'],
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
    activeTab() {
      return (this.$route.meta
        && this.$route.meta.index.includes('-') // This is hack to determine if child route or not
        && this.$route.meta.index)
        || '-1';
    },
    icon() {
      const { matched } = this.$route;
      if (!matched || !matched.length) {
        return null;
      }
      let icon = null;
      for (let i = 0; i < matched.length; i++) {
        const m = matched[i];
        if (m.meta && m.meta.icon) {
          // eslint-disable-next-line prefer-destructuring
          icon = m.meta.icon;
        }
      }
      return icon;
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
  &__tab {
    text-transform: lowercase;
  }
  &__bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-height: 6rem;
    .m-crumbnav__bar-right > .m-menu > .m-nav-item {
      padding: 0;
      margin: 0;
      min-width: 7rem;
      .m-nav-item__link {
        width: 100%;
        display: flex;
        justify-content: center;
      }
    }
  }
}
</style>
