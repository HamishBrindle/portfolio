<template>
  <el-main class="m-main">
    <slot />
  </el-main>
</template>

<script>
import ElMain from 'element-ui/lib/main';

export default {
  name: 'MMain',
  componentName: 'MMain',
  components: {
    'el-main': ElMain,
  },
};
</script>

<style>
</style>
