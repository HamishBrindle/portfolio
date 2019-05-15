<template>
  <el-dropdown
    class="m-dropdown"
    :trigger="trigger"
    :type="type"
    :size="size"
    :split-button="splitButton"
    :hide-on-click="hideOnClick"
    :placement="placement"
    :visible-arrow="visibleArrow"
    :show-timeout="showTimeout"
    :hide-timeout="hideTimeout"
    :tabindex="tabindex"
    @click="onDropdownClick"
    @command="onDropdownCommand"
    @visible-change="onDropdownVisibleChange"
  >
    <slot />
    <slot name="dropdown" />
  </el-dropdown>
</template>

<script>
import ElDropdown from 'element-ui/lib/dropdown';

export default {
  name: 'MDropdown',
  componentName: 'MDropdown',
  components: {
    'el-dropdown': ElDropdown,
  },
  props: {
    trigger: {
      type: String,
      default: 'hover',
    },
    type: String,
    size: {
      type: String,
      default: '',
    },
    splitButton: Boolean,
    hideOnClick: {
      type: Boolean,
      default: true,
    },
    placement: {
      type: String,
      default: 'bottom-end',
    },
    visibleArrow: {
      type: Boolean,
      default: true,
    },
    showTimeout: {
      type: Number,
      default: 250,
    },
    hideTimeout: {
      type: Number,
      default: 150,
    },
    tabindex: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    onDropdownClick(event) {
      this.$emit('click', event);
    },
    onDropdownCommand(event) {
      this.$emit('command', event);
    },
    onDropdownVisibleChange(event) {
      this.$emit('visible-change', event);
    },
  },
};
</script>
