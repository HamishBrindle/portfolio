<template>
  <div class="m-icon__wrapper">
    <svg
      class="m-icon"
      :width="iconWidth"
      :height="iconHeight"
      :color="color"
    >
      <use v-bind="{ 'xlink:href':'/icons/feather-sprite.svg#' + name }" />
    </svg>
  </div>
</template>

<script>
import iconList from './list.json';
import utils from '@/utils';

export default {
  name: 'MIcon',
  componentName: 'MIcon',
  props: {
    name: {
      type: String,
      required: true,
      validator: value => iconList.indexOf(value) !== -1,
    },
    width: {
      type: [String, Number],
      default: 2,
    },
    height: {
      type: [String, Number],
      default: 2,
    },
    color: {
      type: String,
    },
    hoverColor: {
      type: String,
    },
  },
  computed: {
    tag() {
      return utils.string.toKebabCase(this.$options.name);
    },
    iconHeight() {
      return `${this.height}rem`;
    },
    iconWidth() {
      return `${this.width}rem`;
    },
  },
};
</script>

<style lang="scss">
.m-icon__wrapper {
  display: inline-flex;
  align-items: center;
  color: map-get($colors, textPlaceholder);
  font-size: 1rem;
  transition: map-get($transitions, all);
  &:hover {
    color: map-get($colors, textSecondary);
    transform: scale(1.1);
  }
}
.m-icon {
  stroke: currentColor;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  margin: auto 4px;
  vertical-align: middle;
}
</style>
