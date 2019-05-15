<template>
  <m-scrollbar
    style="height: 100%;"
    class="m-grid__scrollbar"
  >
    <div
      class="m-grid"
      :style="styles"
    >
      <slot />
    </div>
  </m-scrollbar>
</template>

<script>
export default {
  name: 'MGrid',
  componentName: 'MGrid',
  props: {
    gridTemplateColumns: String,
    gridTemplateRows: String,
    gridGap: String,
    gridAutoFlow: String,
  },
  computed: {
    styles() {
      const stringBuilder = [];
      if (this.gridTemplateColumns) {
        const property = 'grid-template-columns: ';
        stringBuilder.push((property + this.gridTemplateColumns));
      }
      if (this.gridTemplateRows) {
        const property = 'grid-template-rows: ';
        stringBuilder.push((property + this.gridTemplateRows));
      }
      if (this.gridGap) {
        const property = 'grid-gap: ';
        stringBuilder.push((property + this.gridGap));
      }
      if (this.gridAutoFlow) {
        const property = 'grid-auto-flow: ';
        stringBuilder.push((property + this.gridAutoFlow));
      }
      return stringBuilder.join(';');
    },
  },
};
</script>

<style lang="scss">
.m-grid {
  padding-right: 1rem;
  display: grid;
  &__scrollbar {
    .el-scrollbar__wrap {
      overflow-x: hidden;
    }
  }
}
</style>
