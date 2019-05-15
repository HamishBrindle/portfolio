<template>
  <el-time-picker
    :id="id"
    v-model="timePickerModel"
    class="m-time-picker"
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
    @change="onTimePickerChange"
  />
</template>

<script>
import ElTimePicker from 'element-ui/lib/time-picker';

export default {
  name: 'MTimePicker',
  componentName: 'MTimePicker',
  components: {
    'el-time-picker': ElTimePicker,
  },
  props: {
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
      type: String,
      default: '',
    },
    disabled: Boolean,
    clearable: {
      type: Boolean,
      default: true,
    },
    id: {
      type: [String, Number],
      default: '',
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
    value: [Date, String],
    defaultValue: Date,
    defaultTime: [String, Array],
    rangeSeparator: {
      type: String,
      default: '-',
    },
    pickerOptions: Object,
    unlinkPanels: Boolean,
    validateEvent: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      timePickerModel: this.value,
    };
  },
  watch: {
    value(v) {
      this.timePickerModel = v;
    },
  },
  methods: {
    onTimePickerChange(event) {
      this.$emit('input', event);
      this.$emit('change', event);
    },
  },
};
</script>
