<template>
  <el-tooltip
    v-model="tooltipModel"
    class="m-tooltip"
    :placement="placement"
    :open-delay="openDelay"
    :disabled="disabled"
    :manual="manual"
    :effect="effect"
    :arrow-offset="arrowOffset"
    :popper-class="popperClass"
    :content="content"
    :visible-arrow="visibleArrow"
    :transition="transition"
    :popper-options="popperOptions"
    :enterable="enterable"
    :hide-after="hideAfter"
  >
    <slot />
  </el-tooltip>
</template>

<script>
import ElTooltip from 'element-ui/lib/tooltip';

export default {
  name: 'MTooltip',
  componentName: 'MTooltip',
  components: {
    'el-tooltip': ElTooltip,
  },
  props: {
    placement: {
      type: String,
      default: 'top',
    },
    openDelay: {
      type: Number,
      default: 0,
    },
    disabled: Boolean,
    manual: Boolean,
    effect: {
      type: String,
      default: 'dark',
    },
    arrowOffset: {
      type: Number,
      default: 0,
    },
    popperClass: String,
    content: String,
    visibleArrow: {
      type: Boolean,
      default: true,
    },
    transition: {
      type: String,
      default: 'el-fade-in-linear',
    },
    popperOptions: {
      type: Object,
      default() {
        return {
          boundariesPadding: 10,
          gpuAcceleration: false,
        };
      },
    },
    enterable: {
      type: Boolean,
      default: true,
    },
    hideAfter: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      tooltipModel: this.value,
    };
  },
};
</script>
