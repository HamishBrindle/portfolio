<template>
  <el-form-item
    ref="formItem"
    class="m-form-item"
    :label="label"
    :label-width="labelWidth"
    :prop="prop"
    :required="required"
    :rules="rules"
    :error="error"
    :validate-status="validateStatus"
    :for="labelFor"
    :inline-message="inlineMessage"
    :show-message="showMessage"
    :size="size"
  >
    <slot />
    <span
      v-if="showLabelSlot"
      slot="label"
    >
      <slot name="label" />
    </span>
  </el-form-item>
</template>

<script>
import ElFormItem from 'element-ui/lib/form-item';

export default {
  name: 'MFormItem',
  componentName: 'MFormItem',
  components: {
    'el-form-item': ElFormItem,
  },
  props: {
    label: String,
    labelWidth: String,
    prop: String,
    required: {
      type: Boolean,
      default: undefined,
    },
    rules: [Object, Array],
    error: String,
    validateStatus: String,
    for: String,
    inlineMessage: {
      type: [String, Boolean],
      default: '',
    },
    showMessage: {
      type: Boolean,
      default: true,
    },
    size: String,
  },
  computed: {
    labelFor() {
      return this.for;
    },
    showLabelSlot() {
      return this.$slots.label && this.$slots.label.length > 0;
    },
  },
  methods: {
    resetField() {
      this.$refs.formItem.resetField();
    },
    clearValidate() {
      this.$refs.formItem.clearValidate();
    },
  },
};
</script>

<style>
</style>
