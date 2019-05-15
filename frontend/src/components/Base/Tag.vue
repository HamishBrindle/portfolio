<template>
  <el-tag
    class="m-tag"
    :text="text"
    :closable="closable"
    :type="type"
    :hit="hit"
    :disable-transitions="disableTransitions"
    :color="color"
    :size="size"
    @click="onTagClick"
    @close="onTagClose"
  >
    <slot />
  </el-tag>
</template>

<script>
import ElTag from 'element-ui/lib/tag';

export default {
  name: 'MTag',
  componentName: 'MTag',
  components: {
    'el-tag': ElTag,
  },
  props: {
    text: String,
    closable: Boolean,
    type: String,
    hit: Boolean,
    disableTransitions: Boolean,
    color: String,
    size: String,
  },
  methods: {
    onTagClick(event) {
      this.$emit('click', event);
    },
    onTagClose(event) {
      this.$emit('close', event);
    },
  },
};
</script>
