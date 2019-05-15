<template>
  <el-checkbox-button
    v-model="checkboxButtonModel"
    class="m-checkbox-button"
    :label="label"
    :disabled="disabled"
    :checked="checked"
    :name="name"
    :true-label="trueLabel"
    :false-label="falseLabel"
    @change="onCheckboxButtonChange"
  >
    <slot />
  </el-checkbox-button>
</template>

<script>
import ElCheckboxButton from 'element-ui/lib/checkbox-button';

export default {
  name: 'MCheckboxButton',
  componentName: 'MCheckboxButton',
  components: {
    'el-checkbox-button': ElCheckboxButton,
  },
  props: {
    value: [String, Number, Boolean],
    label: [String, Number, Boolean],
    disabled: Boolean,
    checked: Boolean,
    name: String,
    trueLabel: [String, Number],
    falseLabel: [String, Number],
  },
  data() {
    return {
      checkboxButtonModel: this.value,
    };
  },
  methods: {
    onCheckboxButtonChange(event) {
      this.$emit('input', event);
      this.$emit('change', event);
    },
  },
};
</script>

<style lang="scss">

</style>
