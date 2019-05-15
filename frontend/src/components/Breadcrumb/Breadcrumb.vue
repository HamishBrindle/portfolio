<template>
  <el-breadcrumb
    class="m-breadcrumb"
    :separator="separator"
    :separator-class="separatorClass"
  >
    <slot />
  </el-breadcrumb>
</template>

<script>
import ElBreadcrumb from 'element-ui/lib/breadcrumb';

export default {
  name: 'MBreadcrumb',
  componentName: 'MBreadcrumb',
  components: {
    'el-breadcrumb': ElBreadcrumb,
  },
  props: {
    separator: {
      type: String,
      default: '/',
    },
    separatorClass: {
      type: String,
      default: '',
    },
  },
};
</script>

<style>

</style>
