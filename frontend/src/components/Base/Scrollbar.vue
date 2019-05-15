<template>
  <el-scrollbar
    class="m-scrollbar"
    :native="native"
    :wrap-style="wrapStyle"
    :wrap-class="wrapClass"
    :view-class="viewClass"
    :view-style="viewStyle"
    :noresize="noresize"
    :tag="tag"
  >
    <slot />
  </el-scrollbar>
</template>

<script>
import ElScrollbar from 'element-ui/lib/scrollbar';

export default {
  name: 'MScrollbar',
  componentName: 'MScrollbar',
  components: {
    'el-scrollbar': ElScrollbar,
  },
  props: {
    native: {
      type: Boolean,
      default: () => false,
    },
    wrapStyle: String,
    wrapClass: String,
    viewClass: String,
    viewStyle: String,
    noresize: Boolean,
    tag: {
      type: String,
      default: 'div',
    },
  },
};
</script>
