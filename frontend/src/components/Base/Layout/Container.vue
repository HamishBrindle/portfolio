<template>
  <el-container
    class="m-container"
    :direction="direction"
  >
    <slot />
  </el-container>
</template>

<script>
import ElContainer from 'element-ui/lib/container';

export default {
  name: 'MContainer',
  componentName: 'MContainer',
  components: {
    'el-container': ElContainer,
  },
  props: {
    direction: {
      type: String,
      validator: value => ['vertical', 'horizontal'].indexOf(value) !== -1,
      default: 'vertical',
    },
  },
};
</script>
