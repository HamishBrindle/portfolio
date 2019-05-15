<template>
  <el-cascader
    v-model="cascaderModel"
    class="m-cascader"
    :options="options"
    :props="props"
    :separator="separator"
    :placeholder="placeholder"
    :disabled="disabled"
    :clearable="clearable"
    :change-on-select="changeOnSelect"
    :popper-class="popperClass"
    :expand-trigger="expandTrigger"
    :filterable="filterable"
    :size="size"
    :show-all-levels="showAllLevels"
    :debounce="debounce"
    :before-filter="beforeFilter"
    :hover-threshold="hoverThreshold"
    @change="onCascaderChange"
    @active-item-change="onCascaderActiveItemChange"
    @blur="onCascaderBlur"
    @focus="onCascaderFocus"
    @visible-change="onCascaderVisibleChange"
  />
</template>

<script>
import ElCascader from 'element-ui/lib/cascader';

export default {
  name: 'MCascader',
  componentName: 'MCascader',
  components: {
    'el-cascader': ElCascader,
  },
  props: {
    options: {
      type: Array,
      required: true,
    },
    props: {
      type: Object,
      default() {
        return {
          children: 'children',
          label: 'label',
          value: 'value',
          disabled: 'disabled',
        };
      },
    },
    value: {
      type: Array,
      default() {
        return [];
      },
    },
    separator: {
      type: String,
      default: '/',
    },
    placeholder: {
      type: String,
    },
    disabled: Boolean,
    clearable: {
      type: Boolean,
      default: false,
    },
    changeOnSelect: Boolean,
    popperClass: String,
    expandTrigger: {
      type: String,
      default: 'click',
    },
    filterable: Boolean,
    size: String,
    showAllLevels: {
      type: Boolean,
      default: true,
    },
    debounce: {
      type: Number,
      default: 300,
    },
    beforeFilter: {
      type: Function,
      default: () => (() => {}),
    },
    hoverThreshold: {
      type: Number,
      default: 500,
    },
  },
  data() {
    return {
      cascaderModel: this.value,
    };
  },
  watch: {
    value(v) {
      this.cascaderModel = v;
    },
  },
  methods: {
    onCascaderChange(event) {
      this.$emit('change', event);
      this.$emit('input', event);
    },
    onCascaderActiveItemChange(event) {
      this.$emit('active-item-change', event);
    },
    onCascaderBlur(event) {
      this.$emit('blur', event);
    },
    onCascaderFocus(event) {
      this.$emit('focus', event);
    },
    onCascaderVisibleChange(event) {
      this.$emit('visible-change', event);
    },
  },
};
</script>

<style>

</style>
