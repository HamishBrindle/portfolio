<template>
  <el-submenu
    class="m-submenu"
    :index="index"
    :show-timeout="showTimeout"
    :hide-timeout="hideTimeout"
    :popper-class="popperClass"
    :disabled="disabled"
    :popper-append-to-body="popperAppendToBody"
    @click.native="onSubmenuClick"
  >
    <template
      v-if="showTitle"
      slot="title"
    >
      <slot name="title" />
    </template>
    <slot />
  </el-submenu>
</template>

<script>
import ElSubmenu from 'element-ui/lib/submenu';

export default {
  name: 'MSubmenu',
  componentName: 'MSubmenu',
  components: {
    'el-submenu': ElSubmenu,
  },
  props: {
    index: {
      type: String,
      required: true,
    },
    showTimeout: {
      type: Number,
      default: 300,
    },
    hideTimeout: {
      type: Number,
      default: 300,
    },
    popperClass: String,
    disabled: Boolean,
    popperAppendToBody: {
      type: Boolean,
      default: undefined,
    },
  },
  computed: {
    showTitle() {
      return !!this.$slots.title && this.$slots.title.length > 0;
    },
  },
  methods: {
    onSubmenuClick(event) {
      this.$emit('click', event);
    },
  },
};
</script>

<style>

</style>
