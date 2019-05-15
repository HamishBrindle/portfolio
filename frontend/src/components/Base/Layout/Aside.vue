<template>
  <el-aside
    class="m-aside"
    :width="width"
  >
    <slot />
  </el-aside>
</template>

<script>
import ElAside from 'element-ui/lib/aside';

export default {
  name: 'MAside',
  componentName: 'MAside',
  components: {
    'el-aside': ElAside,
  },
  props: {
    width: {
      type: String,
      default: '300px',
    },
  },
};
</script>

<style>
</style>
