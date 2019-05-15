<template>
  <el-input
    ref="input"
    v-model="inputModel"
    class="m-input"
    v-bind="$attrs"
    :size="size"
    :resize="resize"
    :form="form"
    :disabled="disabled"
    :readonly="readonly"
    :type="type"
    :autosize="autosize"
    :autocomplete="autocomplete"
    :validate-event="validateEvent"
    :suffix-icon="suffixIcon"
    :prefix-icon="prefixIcon"
    :label="label"
    :clearable="clearable"
    :show-password="showPassword"
    :tabindex="tabindex"
    @input="onInput"
    @change="onChange"
    @blur="onBlur"
    @focus="onFocus"
    @clear="onClear"
  >
    <slot
      slot="prepend"
      name="prepend"
    />
    <slot
      slot="prefix"
      name="prefix"
    />
    <slot
      slot="suffix"
      name="suffix"
    />
    <slot
      slot="append"
      name="append"
    />
  </el-input>
</template>

<script>
import ElInput from 'element-ui/lib/input';

export default {
  name: 'MInput',
  componentName: 'MInput',
  components: {
    'el-input': ElInput,
  },
  props: {
    value: [String, Number],
    size: String,
    resize: String,
    form: String,
    disabled: Boolean,
    readonly: Boolean,
    type: {
      type: String,
      default: 'text',
    },
    autosize: {
      type: [Boolean, Object],
      default: false,
    },
    autocomplete: {
      type: String,
      default: 'off',
    },
    autoComplete: {
      type: String,
    },
    validateEvent: {
      type: Boolean,
      default: true,
    },
    suffixIcon: String,
    prefixIcon: String,
    label: String,
    clearable: {
      type: Boolean,
      default: false,
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
    tabindex: String,
  },
  data() {
    return {
      inputModel: this.value,
    };
  },
  watch: {
    value(v) {
      this.inputModel = v;
    },
  },
  methods: {
    onInput(event) {
      this.$emit('input', event);
    },
    onChange(event) {
      this.$emit('change', event);
    },
    onBlur(event) {
      this.$emit('blur', event);
    },
    onFocus(event) {
      this.$emit('focus', event);
    },
    onClear(event) {
      this.$emit('clear', event);
    },
    focus() {
      this.$refs.input.focus();
    },
    blur() {
      this.$refs.input.blur();
    },
    select() {
      this.$refs.input.select();
    },
  },
};
</script>

<style lang="scss">
.el-input__suffix, .el-input__suffix-inner {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
