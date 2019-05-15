<template>
  <el-dropdown-item
    class="m-dropdown-item"
    :command="command"
    :disabled="disabled"
    :divided="divided"
    :icon="icon"
  >
    <slot />
  </el-dropdown-item>
</template>

<script>
import ElDropdownItem from 'element-ui/lib/dropdown-item';

export default {
  name: 'MDropdownItem',
  componentName: 'MDropdownItem',
  components: {
    'el-dropdown-item': ElDropdownItem,
  },
  props: {
    command: String,
    disabled: Boolean,
    divided: Boolean,
    icon: String,
  },
};
</script>

<style lang="scss">
/* .m-dropdown-item {
  display: flex;
  align-items: center;
} */
</style>
