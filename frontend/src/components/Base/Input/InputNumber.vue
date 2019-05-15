<template>
  <el-input-number
    ref="inputNumber"
    v-model="inputNumberModel"
    class="m-input-number"
    :step="step"
    :max="max"
    :min="min"
    :disabled="disabled"
    :size="size"
    :controls="controls"
    :controls-position="controlsPosition"
    :name="name"
    :label="label"
    :placeholder="placeholder"
    :precision="precision"
    @input="onChange"
    @blur="onBlur"
    @focus="onFocus"
  />
</template>

<script>
import ElInputNumber from 'element-ui/lib/input-number';

export default {
  name: 'MInputNumber',
  componentName: 'MInputNumber',
  components: {
    'el-input-number': ElInputNumber,
  },
  props: {
    step: {
      type: Number,
      default: 1,
    },
    max: {
      type: Number,
      default: Infinity,
    },
    min: {
      type: Number,
      default: -Infinity,
    },
    value: Number,
    disabled: Boolean,
    size: String,
    controls: {
      type: Boolean,
      default: true,
    },
    controlsPosition: {
      type: String,
      default: '',
    },
    name: String,
    label: String,
    placeholder: String,
    precision: {
      type: Number,
      validator(val) {
        return val >= 0 && val === parseInt(val, 10);
      },
    },
  },
  data() {
    return {
      inputNumberModel: this.value,
    };
  },
  watch: {
    value(v) {
      this.inputNumberModel = v;
    },
  },
  methods: {
    onChange(event) {
      this.$emit('input', event);
    },
    onBlur(event) {
      this.$emit('blur', event);
    },
    onFocus(event) {
      this.$emit('focus', event);
    },
    focus() {
      this.$refs.inputNumber.focus();
    },
    select() {
      this.$refs.inputNumber.select();
    },
  },
};
</script>
