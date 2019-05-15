<template>
  <div
    class="m-grid-item"
    :style="styles"
  >
    <slot />
  </div>
</template>

<script>

export default {
  name: 'MGridItem',
  componentName: 'MGridItem',
  props: {
    styles: {
      type: [String, Object],
      default: () => ({
        fontSize: '150%',
        width: '100%',
        minHeight: '30rem',
      }),
    },
  },
};
</script>
