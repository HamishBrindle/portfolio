<template>
  <el-menu-item
    class="m-menu-item"
    :index="index"
    :route="route"
    :disabled="disabled"
    @click="onMenuItemClick"
  >
    <template
      v-if="showTitle"
      slot="title"
    >
      <slot name="title" />
    </template>
    <slot />
  </el-menu-item>
</template>

<script>
import ElMenuItem from 'element-ui/lib/menu-item';

export default {
  name: 'MMenuItem',
  componentName: 'MMenuItem',
  components: {
    'el-menu-item': ElMenuItem,
  },
  props: {
    index: [Number, String],
    route: [String, Object],
    disabled: Boolean,
  },
  computed: {
    showTitle() {
      return !!this.$slots.title && this.$slots.title.length > 0;
    },
  },
  methods: {
    /**
     * Emits index of menu-item clicked.
     */
    onMenuItemClick(event) {
      this.$emit('click', event);
    },
  },
};
</script>
