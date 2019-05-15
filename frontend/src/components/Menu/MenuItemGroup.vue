<template>
  <el-menu-item-group
    class="m-menu-item-group"
  >
    <template
      v-if="showTitle"
      slot="title"
    >
      <slot name="title" />
    </template>
    <slot />
  </el-menu-item-group>
</template>

<script>
import ElMenuItemGroup from 'element-ui/lib/menu-item-group';

export default {
  name: 'MMenuItemGroup',
  componentName: 'MMenuItemGroup',
  components: {
    'el-menu-item-group': ElMenuItemGroup,
  },
  props: {
    title: String,
  },
  computed: {
    showTitle() {
      return !!this.$slots.title && this.$slots.title.length > 0;
    },
  },
};
</script>

<style>

</style>
