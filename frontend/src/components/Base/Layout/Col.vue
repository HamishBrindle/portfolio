<template>
  <el-col
    class="m-col"
    :span="span"
    :tag="tag"
    :offset="offset"
    :pull="pull"
    :push="push"
    :xs="xs"
    :sm="sm"
    :md="md"
    :lg="lg"
    :xl="xl"
  >
    <slot />
  </el-col>
</template>

<script>
import ElCol from 'element-ui/lib/col';

export default {
  name: 'MCol',
  componentName: 'MCol',
  components: {
    'el-col': ElCol,
  },
  props: {
    span: {
      type: Number,
      default: 24,
    },
    tag: {
      type: String,
      default: 'div',
    },
    offset: Number,
    pull: Number,
    push: Number,
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object],
  },
};
</script>
