<template>
  <el-header
    class="m-header"
    :height="height"
  >
    <slot />
  </el-header>
</template>

<script>
import ElHeader from 'element-ui/lib/header';

export default {
  name: 'MHeader',
  componentName: 'MHeader',
  components: {
    'el-header': ElHeader,
  },
  props: {
    height: {
      type: String,
      default: '60px',
    },
  },
};
</script>

<style>

</style>
