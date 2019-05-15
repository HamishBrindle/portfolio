<template>
  <el-select
    :id="id"
    ref="select"
    v-model="selectModel"
    class="m-select"
    v-bind="[$props, $attrs]"
    :name="name"
    :autocomplete="autocomplete"
    :automatic-dropdown="automaticDropdown"
    :size="size"
    :disabled="disabled"
    :clearable="clearable"
    :filterable="filterable"
    :allow-create="allowCreate"
    :loading="loading"
    :popper-class="popperClass"
    :remote="remote"
    :loading-text="loadingText"
    :no-match-text="noMatchText"
    :no-data-text="noDataText"
    :remote-method="remoteMethod"
    :filter-method="filterMethod"
    :multiple="multiple"
    :multiple-limit="multipleLimit"
    :placeholder="placeholder"
    :default-first-option="defaultFirstOption"
    :reserve-keyword="reserveKeyword"
    :value-key="valueKey"
    :collapse-tags="collapseTags"
    :popper-append-to-body="popperAppendToBody"
    @input="onInput"
    @change="onChange"
    @visible-change="onVisibleChange"
    @remove-tag="onRemoveTag"
    @clear="onClear"
    @blur="onBlur"
    @focus="onFocus"
  >
    <slot name="empty" />
    <slot name="prefix" />
    <slot />
  </el-select>
</template>

<script>
import ElSelect from 'element-ui/lib/select';

export default {
  name: 'MSelect',
  componentName: 'MSelect',
  components: {
    'el-select': ElSelect,
  },
  props: {
    name: String,
    id: String,
    value: {
      type: [String, Number, Boolean, Array],
      required: true,
    },
    autocomplete: {
      type: String,
      default: 'off',
    },
    automaticDropdown: Boolean,
    size: String,
    disabled: Boolean,
    clearable: Boolean,
    filterable: Boolean,
    allowCreate: Boolean,
    loading: Boolean,
    popperClass: String,
    remote: Boolean,
    loadingText: String,
    noMatchText: String,
    noDataText: String,
    remoteMethod: Function,
    filterMethod: Function,
    multiple: Boolean,
    multipleLimit: {
      type: Number,
      default: 0,
    },
    placeholder: {
      type: String,
    },
    defaultFirstOption: Boolean,
    reserveKeyword: Boolean,
    valueKey: {
      type: String,
      default: 'value',
    },
    collapseTags: Boolean,
    popperAppendToBody: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      selectModel: this.value,
    };
  },
  watch: {
    value(v) {
      this.selectModel = v;
    },
  },
  methods: {
    onInput(event) {
      this.$emit('input', event);
    },
    onChange(event) {
      this.$emit('change', event);
    },
    onVisibleChange(event) {
      this.$emit('visible-change', event);
    },
    onRemoveTag(event) {
      this.$emit('remove-tag', event);
    },
    onClear(event) {
      this.$emit('clear', event);
    },
    onBlur(event) {
      this.$emit('blur', event);
    },
    onFocus(event) {
      this.$emit('focus', event);
    },
    focus() {
      this.$refs.select.focus();
    },
    blur() {
      this.$refs.select.blur();
    },
    getOption(value) {
      return this.$refs.select.getOption(value) || null;
    },
  },
};
</script>

<style>
</style>
