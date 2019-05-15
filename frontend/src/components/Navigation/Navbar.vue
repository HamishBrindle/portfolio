<template>
  <div class="m-navbar__wrapper">
    <div class="m-navbar">
      <div class="m-navbar__left">
        <div class="m-navbar__hamburger hidden-md-and-up">
          <m-hamburger
            v-model="navbarOpen"
            class="m-navbar__hamburger-button"
            name="slider"
          />
        </div>
        <div class="m-navbar__site-name">
          <m-button
            type="text"
            class="m-navbar__site-name-button"
            @click="onMenuSiteNameClick"
          >
            <span class="m-navbar__site-name-button-text text-bold">{{ siteName }}</span>
          </m-button>
        </div>
      </div>
      <div class="m-navbar__mid hidden-sm-and-down">
        <m-menu
          class="m-navbar__links"
          :default-active="activeIndex"
          mode="horizontal"
        >
          <m-nav-item
            v-for="link in siteLinks"
            :key="link.index"
            :index="link.index"
            :to="{ name: link.route }"
            :children="link.children || []"
          >
            {{ link.label }}
          </m-nav-item>
        </m-menu>
      </div>
      <div class="m-navbar__right hidden-xs-only">
        <div
          v-if="!!auth"
          class="m-navbar__user"
        >
          <m-dropdown
            class="m-navbar__user-dropdown"
            trigger="click"
            @command="onMenuUserDropdownSelect"
          >
            <span>
              <m-icon name="chevron-down" />
              {{ user && user.name }}
            </span>
            <m-dropdown-menu
              slot="dropdown"
            >
              <m-dropdown-item
                v-for="option of userDropdown"
                :key="option.label"
                class="m-navbar__user-dropdown-item"
                :disabled="option.disabled"
                :divided="option.divided"
                :command="option.command"
              >
                <span>
                  {{ option.label }}
                  <m-icon
                    v-if="option.icon"
                    :name="option.icon"
                  />
                </span>
              </m-dropdown-item>
            </m-dropdown-menu>
          </m-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import styles from 'global-styles';
import navigationMixin from '@/mixins/navigation.js';
import { mapState } from 'vuex';

export default {
  name: 'MNavbar',
  componentName: 'MNavbar',
  components: {
    'm-menu': () => import(/* webpackChunkName: "chunk-components-menu" */ '@/components/Menu/Menu.vue'),
    'm-nav-item': () => import(/* webpackChunkName: "chunk-components-navigation" */ '@/components/Navigation/NavItem.vue'),
    'm-dropdown': () => import(/* webpackChunkName: "chunk-components-dropdown" */ '@/components/Dropdown/Dropdown.vue'),
    'm-dropdown-item': () => import(/* webpackChunkName: "chunk-components-dropdown" */ '@/components/Dropdown/DropdownItem.vue'),
    'm-dropdown-menu': () => import(/* webpackChunkName: "chunk-components-dropdown" */ '@/components/Dropdown/DropdownMenu.vue'),
  },
  mixins: [navigationMixin],
  data() {
    return {
      siteName: 'HB',
      color: styles['color-primary'],
      userDropdown: [
        {
          label: 'Logout',
          command: 'logout',
          icon: 'log-out',
        },
      ],
    };
  },
  computed: {
    ...mapState({
      user: state => state.user.user,
      auth: state => state.user.auth,
    }),
  },
  methods: {
    onMenuButtonClick() {},
    onMenuSiteNameClick() {
      this.$router.push({ name: 'dashboard' });
    },
    onMenuUserDropdownSelect(command) {
      if (command === 'logout') {
        this.logout();
      }
    },
    logout() {
      this.$store.dispatch('USER_LOGOUT');
    },
  },
};
</script>

<style lang="scss">
.m-navbar {
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 6rem;
  justify-content: space-between;
  align-items: center;
  box-shadow: map-get($box-shadows, boxShadowLight);
  padding: 0 1.5rem;
  &__wrapper {
    z-index: 9000;
  }
  &__left, &__mid, &__right {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__left {
    justify-content: space-around;
  }
  &__mid {
    min-width: 69.5rem;
  }
  &__hamburger-button {
    color: map-get($colors, textPrimary);
    padding-right: 2rem;
  }
  &__hamburger-button:hover {
    color: map-get($colors, primary);
  }
  &__site-name-button {
    font-size: 2.3rem;
    color: map-get($colors, textPrimary);
  }
  &__user-dropdown {
    cursor: pointer;
    font-size: 2rem;
    font-weight: 300;
    color: map-get($colors, textPrimary);
    &:focus {
      outline: none;
    }
    & > span {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  &__user-dropdown-item {
    & > span {
      display: flex;
      justify-content: space-between;
      min-width: 15rem;
    }
  }
  &__links {
    display: flex;
    .m-submenu .el-submenu__title i {
      position: initial;
      margin-top: 0;
    }
  }
}

/* Element Overrides */
.m-menu.el-menu--horizontal {
  border-bottom: none;
}
</style>
