<template>
  <el-date-picker
    :id="id"
    v-model="datePickerModel"
    class="m-date-picker"
    :type="type"
    :size="size"
    :format="format"
    :value-format="valueFormat"
    :readonly="readonly"
    :placeholder="placeholder"
    :start-placeholder="startPlaceholder"
    :end-placeholder="endPlaceholder"
    :prefix-icon="prefixIcon"
    :clear-icon="clearIcon"
    :name="name"
    :disabled="disabled"
    :clearable="clearable"
    :popper-class="popperClass"
    :editable="editable"
    :align="align"
    :default-value="defaultValue"
    :default-time="defaultTime"
    :range-separator="rangeSeparator"
    :picker-options="pickerOptions"
    :unlink-panels="unlinkPanels"
    :validate-event="validateEvent"
    refs="datePicker"
    @change="onDatePickerChange"
    @blur="onDatePickerBlur"
    @focus="onDatePickerFocus"
  >
    <slot name="range-separator" />
  </el-date-picker>
</template>

<script>
import ElDatePicker from 'element-ui/lib/date-picker';

const validator = val => (
  val === null
  || val === undefined
  || typeof val === 'string'
  || (Array.isArray(val) && val.length === 2 && val.every(s => typeof s === 'string'))
);

export default {
  name: 'MDatePicker',
  componentName: 'MDatePicker',
  components: {
    'el-date-picker': ElDatePicker,
  },
  props: {
    type: String,
    size: String,
    format: String,
    valueFormat: String,
    readonly: Boolean,
    placeholder: String,
    startPlaceholder: String,
    endPlaceholder: String,
    prefixIcon: String,
    clearIcon: {
      type: String,
      default: 'el-icon-circle-close',
    },
    name: {
      default: '',
      validator,
    },
    disabled: Boolean,
    clearable: {
      type: Boolean,
      default: true,
    },
    id: {
      default: '',
      validator,
    },
    popperClass: String,
    editable: {
      type: Boolean,
      default: true,
    },
    align: {
      type: String,
      default: 'left',
    },
    value: [String, Date, Array],
    defaultValue: Date,
    defaultTime: [String, Array],
    rangeSeparator: {
      type: String,
      default: '-',
    },
    pickerOptions: {
      type: Object,
      /**
       * Option parameters for picker - Vue can't do checks
       * on nested props, so these are for reference only!
       *
       * shortcuts: {
       *   type: Array,
       *   default: () => []
       * },
       * disabledDate: {
       *   type: Function(date) => Boolean
       * },
       * firstDayOfWeek: {
       *   type: Number,
       *   default: 7,
       *   validator: (n) => (n <= 7 && n >= 1),
       * },
       * onPick: {
       *   type: Function({ maxDate, minDate })
       * }
       *
       */
    },
    unlinkPanels: Boolean,
    validateEvent: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      datePickerModel: this.value,
    };
  },
  watch: {
    value(v) {
      this.datePickerModel = v;
    },
  },
  methods: {
    onDatePickerChange(event) {
      this.$emit('input', event);
      this.$emit('change', event);
    },
    onDatePickerBlur(event) {
      this.$emit('blur', event);
    },
    onDatePickerFocus(event) {
      this.$emit('focus', event);
    },
    focus() {
      this.$refs.datePicker.focus();
    },
  },
};
</script>

<style lang="scss">
.el-date-editor--daterange, .el-date-editor--monthrange {
  min-width: 37rem; // Any shorter, and separated gets crushed
}
</style>
