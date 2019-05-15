<template>
  <el-footer
    class="m-footer"
    :height="height"
  >
    <slot />
  </el-footer>
</template>

<script>
import ElFooter from 'element-ui/lib/footer';

export default {
  name: 'MFooter',
  componentName: 'MFooter',
  components: {
    'el-footer': ElFooter,
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
