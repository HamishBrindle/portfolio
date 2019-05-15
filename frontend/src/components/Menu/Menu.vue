<template>
  <el-menu
    ref="menu"
    class="m-menu"
    :mode="mode"
    :default-active="defaultActive"
    :default-openeds="defaultOpeneds"
    :unique-opened="uniqueOpened"
    :router="router"
    :menu-trigger="menuTrigger"
    :collapse="collapse"
    :background-color="backgroundColor"
    :text-color="textColor"
    :active-text-color="activeTextColor"
    :collapse-transition="collapseTransition"
    @select="onMenuSelect"
    @open="onMenuOpen"
    @close="onMenuClose"
  >
    <slot />
  </el-menu>
</template>

<script>
import ElMenu from 'element-ui/lib/menu';

export default {
  name: 'MMenu',
  componentName: 'MMenu',
  components: {
    'el-menu': ElMenu,
  },
  props: {
    mode: {
      type: String,
      default: 'vertical',
    },
    defaultActive: {
      type: String,
      default: '',
    },
    defaultOpeneds: Array,
    uniqueOpened: Boolean,
    router: Boolean,
    menuTrigger: {
      type: String,
      default: 'hover',
    },
    collapse: Boolean,
    backgroundColor: {
      type: String,
    },
    textColor: {
      type: String,
    },
    activeTextColor: {
      type: String,
    },
    collapseTransition: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    onMenuSelect(key, path) {
      // TODO: Anomoly of duplicate keys in path...
      const keyPath = [];
      for (let i = 0; i < path.length; i += 2) {
        keyPath.push(path[i]);
      }
      this.$emit('select', { key, keyPath });
    },
    onMenuOpen(event) {
      this.$emit('open', event);
    },
    onMenuClose(event) {
      this.$emit('close', event);
    },
    /**
     * Open a specific sub-menu
     *
     * @param {(String|Number)} index - index of submenu to open
     */
    open(index) {
      this.$refs.menu.open(index);
    },
    /**
     * Close a specific sub-menu
     *
     * @param {(String|Number)} index - index of submenu to close
     */
    close(index) {
      this.$refs.menu.close(index);
    },
  },
};
</script>

<style lang="scss">

</style>
