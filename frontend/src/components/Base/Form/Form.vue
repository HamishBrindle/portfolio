<template>
  <el-form
    ref="form"
    class="m-form"
    :model="model"
    :rules="rules"
    :label-position="labelPosition"
    :label-width="labelWidth"
    :label-suffix="labelSuffix"
    :inline="inline"
    :inline-message="inlineMessage"
    :status-icon="statusIcon"
    :show-message="showMessage"
    :size="size"
    :disabled="disabled"
    :validate-on-rule-change="validateOnRuleChange"
    :hide-required-asterisk="hideRequiredAsterisk"
    @validate="onFormValidate"
  >
    <slot />
  </el-form>
</template>

<script>
import ElForm from 'element-ui/lib/form';

export default {
  name: 'MForm',
  componentName: 'MForm',
  components: {
    'el-form': ElForm,
  },
  props: {
    model: Object,
    rules: Object,
    labelPosition: String,
    labelWidth: String,
    labelSuffix: {
      type: String,
      default: '',
    },
    inline: Boolean,
    inlineMessage: Boolean,
    statusIcon: Boolean,
    showMessage: {
      type: Boolean,
      default: true,
    },
    size: String,
    disabled: Boolean,
    validateOnRuleChange: {
      type: Boolean,
      default: true,
    },
    hideRequiredAsterisk: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onFormValidate(event) {
      this.$emit('validate', event);
    },
    /**
     * Validate the whole form. Takes a callback as a param. After validation,
     * the callback will be executed with two params: a boolean indicating if
     * the validation has passed, and an object containing all fields that fail
     * the validation. Returns a promise if callback is omitted
     *
     * @param cb - Function(boolean, object)
     */
    validate(cb) {
      this.$refs.form.validate(cb);
    },
    /**
     * Validate one or several form items
     *
     * @param fn - Function(props: string)
     */
    validateField(fn) {
      this.$refs.form.validateField(fn);
    },
    /**
     * Reset all the fields and remove validation result
     */
    resetFields() {
      this.$refs.form.resetFields();
    },
    /**
     * Clear validation message for certain fields. The parameter is prop name
     * or an array of prop names of the form items whose validation messages
     * will be removed. When omitted, all fields' validation messages will be
     * cleared
     *
     * @param fn - Function(props: string)
     */
    clearValidate() {
      this.$refs.form.clearValidate();
    },
  },
};
</script>

<style>
</style>
