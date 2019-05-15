<template>
  <el-option-group
    class="m-option-group"
    :label="label"
    :disabled="disabled"
  >
    <slot />
  </el-option-group>
</template>

<script>
import ElOptionGroup from 'element-ui/lib/option-group';

export default {
  name: 'MOptionGroup',
  componentName: 'MOptionGroup',
  components: {
    'el-option-group': ElOptionGroup,
  },
  props: {
    label: String,
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
</style>
