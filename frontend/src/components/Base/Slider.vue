<template>
  <el-slider
    v-model="sliderModel"
    class="m-slider"
    :min="min"
    :max="max"
    :step="step"
    :show-input="showInput"
    :show-input-controls="showInputControls"
    :input-size="inputSize"
    :show-stops="showStops"
    :show-tooltip="showTooltip"
    :format-tooltip="formatTooltip"
    :disabled="disabled"
    :range="range"
    :vertical="vertical"
    :height="height"
    :debounce="debounce"
    :label="label"
    :tooltip-class="tooltipClass"
    @change="onSliderChange"
  />
</template>

<script>
import ElSlider from 'element-ui/lib/slider';

export default {
  name: 'MSlider',
  componentName: 'MSlider',
  components: {
    'el-slider': ElSlider,
  },
  props: {
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    step: {
      type: Number,
      default: 1,
    },
    value: {
      type: [Number, Array],
      default: 0,
    },
    showInput: {
      type: Boolean,
      default: false,
    },
    showInputControls: {
      type: Boolean,
      default: true,
    },
    inputSize: {
      type: String,
      default: 'small',
    },
    showStops: {
      type: Boolean,
      default: false,
    },
    showTooltip: {
      type: Boolean,
      default: true,
    },
    formatTooltip: Function,
    disabled: {
      type: Boolean,
      default: false,
    },
    range: {
      type: Boolean,
      default: false,
    },
    vertical: {
      type: Boolean,
      default: false,
    },
    height: {
      type: String,
    },
    debounce: {
      type: Number,
      default: 300,
    },
    label: {
      type: String,
    },
    tooltipClass: String,
  },
  data() {
    return {
      sliderModel: this.value,
    };
  },
  watch: {
    value(v) {
      this.sliderModel = v;
    },
  },
  methods: {
    onSliderChange(event) {
      this.$emit('input', event);
      this.$emit('change', event);
    },
  },
};
</script>
