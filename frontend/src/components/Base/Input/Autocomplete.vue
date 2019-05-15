<template>
  <el-autocomplete
    ref="autocomplete"
    v-model="autocompleteModel"
    class="m-autocomplete"
    v-bind="[$props, $attrs]"
    :value-key="valueKey"
    :popper-class="popperClass"
    :popper-options="popperOptions"
    :placeholder="placeholder"
    :clearable="clearable"
    :disabled="disabled"
    :name="name"
    :size="size"
    :maxlength="maxlength"
    :minlength="minlength"
    :autofocus="autofocus"
    :fetch-suggestions="fetchSuggestions"
    :trigger-on-focus="triggerOnFocus"
    :custom-item="customItem"
    :select-when-unmatched="selectWhenUnmatched"
    :prefix-icon="prefixIcon"
    :suffix-icon="suffixIcon"
    :label="label"
    :debounce="debounce"
    :placement="placement"
    :hide-loading="hideLoading"
    :popper-append-to-body="popperAppendToBody"
    :highlight-first-item="highlightFirstItem"
    @input="onChange"
    @select="onSelect"
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
  </el-autocomplete>
</template>

<script>
import ElAutocomplete from 'element-ui/lib/autocomplete';

export default {
  name: 'MAutocomplete',
  componentName: 'MAutocomplete',
  components: {
    'el-autocomplete': ElAutocomplete,
  },
  props: {
    valueKey: {
      type: String,
      default: 'value',
    },
    popperClass: String,
    popperOptions: Object,
    placeholder: String,
    clearable: {
      type: Boolean,
      default: false,
    },
    disabled: Boolean,
    name: String,
    size: String,
    value: String,
    maxlength: Number,
    minlength: Number,
    autofocus: Boolean,
    fetchSuggestions: Function,
    triggerOnFocus: {
      type: Boolean,
      default: true,
    },
    customItem: String,
    selectWhenUnmatched: {
      type: Boolean,
      default: false,
    },
    prefixIcon: String,
    suffixIcon: String,
    label: String,
    debounce: {
      type: Number,
      default: 300,
    },
    placement: {
      type: String,
      default: 'bottom-start',
    },
    hideLoading: Boolean,
    popperAppendToBody: {
      type: Boolean,
      default: true,
    },
    highlightFirstItem: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    autocompleteModel: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
  },
  methods: {
    onChange(event) {
      this.$emit('change', event);
    },
    onSelect(event) {
      this.$emit('select', event);
    },
    focus() {
      this.$refs.autocomplete.focus();
    },
  },
};
</script>

<style>
</style>
