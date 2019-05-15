<template>
  <el-button
    class="m-button"
    :type="type"
    :icon="icon"
    :plain="plain"
    :round="round"
    :circle="circle"
    :size="size"
    :native-type="nativeType"
    :loading="loading"
    :disabled="disabled"
    @click="onButtonClick"
  >
    <slot />
  </el-button>
</template>

<script>
import ElButton from 'element-ui/lib/button';

export default {
  name: 'MButton',
  componentName: 'MButton',
  components: {
    'el-button': ElButton,
  },
  props: {
    type: {
      type: String,
      default: 'default',
      validator: value => ['default', 'primary', 'success', 'warning', 'danger', 'info', 'text'].indexOf(value) !== -1,
    },
    size: String,
    icon: {
      type: String,
      default: '',
    },
    nativeType: {
      type: String,
      default: 'button',
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean,
  },
  methods: {
    onButtonClick(event) {
      this.$emit('click', event);
    },
  },
};
</script>
