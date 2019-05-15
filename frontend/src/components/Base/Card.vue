<template>
  <div :class="`m-card ${(hasButtons) ? 'm-card--buttons' : ''}`">
    <el-card
      :body-style="bodyStyle"
      :shadow="shadow"
    >
      <div
        v-if="showHeader"
        slot="header"
      >
        <slot name="header" />
      </div>
      <slot />
    </el-card>
    <div
      v-if="$slots.button"
      class="m-card__buttons"
    >
      <slot name="button" />
    </div>
  </div>
</template>

<script>
import ElCard from 'element-ui/lib/card';

export default {
  name: 'MCard',
  componentName: 'MCard',
  components: {
    'el-card': ElCard,
  },
  props: {
    header: String,
    bodyStyle: Object,
    shadow: {
      type: String,
    },
  },
  computed: {
    showHeader() {
      return this.$slots.header && this.$slots.header.length > 0;
    },
    hasButtons() {
      return this.$slots.button && this.$slots.button.length > 0;
    },
  },
};
</script>

<style lang="scss">
.m-card {
  &__buttons {
    display: flex;
    flex-direction: column;
    * {
      margin: 0 !important;
    }
    *:not(:last-child) {
      border-radius: 0;
    }
    *:last-child {
      border-radius: 0 0 0.5rem 0.5rem;
    }
  }
}

.m-card--buttons {
  .el-card {
    border-radius: 0.5rem 0.5rem 0 0;
    border-bottom: none;
  }
}
</style>
