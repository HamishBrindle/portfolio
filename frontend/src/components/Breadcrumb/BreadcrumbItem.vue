<template>
  <el-breadcrumb-item
    class="m-breadcrumb-item"
    :to="to"
    :replace="replace"
  >
    <slot />
  </el-breadcrumb-item>
</template>

<script>
import ElBreadcrumbItem from 'element-ui/lib/breadcrumb-item';

export default {
  name: 'MBreadcrumbItem',
  componentName: 'MBreadcrumbItem',
  components: {
    'el-breadcrumb-item': ElBreadcrumbItem,
  },
  props: {
    to: [String, Object],
    replace: Boolean,
  },
};
</script>

<style lang="scss">
.m-crumbnav > span > .m-breadcrumb-item {

  &:not(:last-child) {
    .el-breadcrumb__inner.is-link {
      text-decoration: underline;
      font-weight: normal;
    }
  }
}
</style>
