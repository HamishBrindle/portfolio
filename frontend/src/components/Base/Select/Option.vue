<template>
  <el-option
    class="m-option"
    :value="value"
    :label="label"
    :disabled="disabled"
  >
    <slot />
  </el-option>
</template>

<script>
import ElOption from 'element-ui/lib/option';

export default {
  name: 'MOption',
  componentName: 'MOption',
  components: {
    'el-option': ElOption,
  },
  props: {
    value: {
      type: [String, Number, Boolean],
      required: true,
    },
    label: [String, Number],
    created: Boolean,
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>

</style>
