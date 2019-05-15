<template>
  <el-row
    class="m-row"
    :tag="tag"
    :gutter="gutter"
    :type="type"
    :justify="justify"
    :align="align"
  >
    <slot />
  </el-row>
</template>

<script>
import ElRow from 'element-ui/lib/row';

export default {
  name: 'MRow',
  componentName: 'MRow',
  components: {
    'el-row': ElRow,
  },
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    gutter: Number,
    type: String,
    justify: {
      type: String,
      default: 'start',
    },
    align: {
      type: String,
      default: 'top',
    },
  },
};
</script>
