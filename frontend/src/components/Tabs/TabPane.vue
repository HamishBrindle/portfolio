<template>
  <el-tab-pane
    ref="tab-pane"
    class="m-tab-pane"
    :label="label"
    :name="name"
    :closable="closable"
    :disabled="disabled"
    :lazy="lazy"
  >
    <slot />
  </el-tab-pane>
</template>

<script>
import ElTabPane from 'element-ui/lib/tab-pane';

export default {
  name: 'MTabPane',
  componentName: 'MTabPane',
  components: {
    'el-tab-pane': ElTabPane,
  },
  props: {
    label: String,
    name: String,
    closable: Boolean,
    disabled: Boolean,
    lazy: Boolean,
  },
  computed: {
    currentName() {
      return this.$parent.currentName;
    },
  },
};
</script>
