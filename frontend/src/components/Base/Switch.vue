<template>
  <el-switch
    :id="id"
    ref="switch"
    v-model="switchModel"
    class="m-switch"
    :disabled="disabled"
    :width="width"
    :active-icon-class="activeIconClass"
    :inactive-icon-class="inactiveIconClass"
    :active-text="activeText"
    :inactive-text="inactiveText"
    :active-color="activeColor"
    :inactive-color="inactiveColor"
    :active-value="activeValue"
    :inactive-value="inactiveValue"
    :name="name"
    :validate-event="validateEvent"
    @change="onSwitchChange"
  />
</template>

<script>
import ElSwitch from 'element-ui/lib/switch';
import styles from 'global-styles';

export default {
  name: 'MSwitch',
  componentName: 'MSwitch',
  components: {
    'el-switch': ElSwitch,
  },
  props: {
    value: {
      type: [Boolean, String, Number],
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    width: {
      type: Number,
      default: 40,
    },
    activeIconClass: {
      type: String,
      default: '',
    },
    inactiveIconClass: {
      type: String,
      default: '',
    },
    activeText: String,
    inactiveText: String,
    activeColor: {
      type: String,
      default: styles['color-primary'],
    },
    inactiveColor: {
      type: String,
      default: styles['color-danger'],
    },
    activeValue: {
      type: [Boolean, String, Number],
      default: true,
    },
    inactiveValue: {
      type: [Boolean, String, Number],
      default: false,
    },
    name: {
      type: String,
      default: '',
    },
    validateEvent: {
      type: Boolean,
      default: true,
    },
    id: String,
  },
  data() {
    return {
      switchModel: this.value,
    };
  },
  watch: {
    value(v) {
      this.switchModel = v;
    },
  },
  methods: {
    onSwitchChange(event) {
      this.$emit('input', event);
      this.$emit('change', event);
    },
    focus() {
      this.$refs.switch.focus();
    },
  },
};
</script>

<style lang="scss">
.el-switch {
  font-size: 44px;
}
.el-switch__label:not(.is-active) {
  opacity: 0.3;
}
</style>
