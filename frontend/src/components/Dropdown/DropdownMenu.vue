<template>
  <el-dropdown-menu
    class="m-dropdown-menu"
    :visible-arrow="visibleArrow"
    :arrow-offset="arrowOffset"
  >
    <slot />
  </el-dropdown-menu>
</template>

<script>
import ElDropdownMenu from 'element-ui/lib/dropdown-menu';

export default {
  name: 'MDropdownMenu',
  componentName: 'MDropdownMenu',
  components: {
    'el-dropdown-menu': ElDropdownMenu,
  },
  props: {
    visibleArrow: {
      type: Boolean,
      default: true,
    },
    arrowOffset: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style>

</style>
