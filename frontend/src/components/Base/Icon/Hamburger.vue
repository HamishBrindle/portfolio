<template>
  <button
    :class="classList"
    type="button"
    aria-label="Menu"
    aria-controls="navigation"
    @click="onHamburgerClick"
  >
    <span class="hamburger-box">
      <span class="hamburger-inner" />
    </span>
  </button>
</template>

<script>
/**
 * Implements animations for hamburger icons. To add more animations,
 * visit https://jonsuh.com/hamburgers/.
 */
export default {
  name: 'MHamburger',
  componentName: 'MHamburger',
  props: {
    value: Boolean,
    name: {
      type: String,
      validator: name => ['elastic', 'elastic-r', 'slider', 'slider-r'].includes(name),
      default: 'slider',
    },
  },
  data() {
    return {
      active: this.value,
    };
  },
  computed: {
    classList() {
      return `hamburger hamburger--${this.name} ${
        this.active ? 'is-active' : ''
      }`;
    },
  },
  watch: {
    value(val) {
      this.active = val;
    },
  },
  methods: {
    onHamburgerClick(event) {
      this.active = !this.active;
      this.$emit('click', event);
      this.$emit('change', this.active);
      this.$emit('input', this.active);
    },
  },
};
</script>

<style lang="scss">
/**
 * 🍔🍔🍔.
 *
 * @description Tasty CSS-animated hamburgers
 * @author Jonathan Suh @jonsuh
 * @site https://jonsuh.com/hamburgers
 * @link https://github.com/jonsuh/hamburgers
 */
.hamburger {
  padding: 1.5rem 0;
  display: flex;
  cursor: pointer;
  transition: map-get($transitions, all);
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;
  &, &.is-active {
    .hamburger-inner,
    .hamburger-inner::before,
    .hamburger-inner::after {
      background-color: map-get($colors, textPrimary);
    }
  }
  &:hover, &.is-active:hover {
    opacity: 0.7;
    .hamburger-inner,
    .hamburger-inner::before,
    .hamburger-inner::after {
      background-color: map-get($colors, primary);
    }
  }
  &:focus {
    outline: none;
  }
  &-box {
  width: 3.3rem;
  height: 2.6rem;
  display: inline-block;
  position: relative;
  }
  &-inner {
    display: block;
    top: 50%;
    margin-top: -0.2rem;
  }
  &-inner,
  &-inner::before,
  &-inner::after {
    width: 3.3rem;
    height: 0.7rem;
    background-color: #000;
    border-radius: 0.15rem;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }
  &-inner::before,
  &-inner::after {
    content: '';
    display: block;
  }
  &-inner::before {
    top: -0.1rem;
  }
  &-inner::after {
    bottom: -0.1rem;
  }

  /**
   * Elastic
   */
  &--elastic &-inner {
    top: 0.2rem;
    transition-duration: 0.275s;
    transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  &--elastic &-inner::before {
    top: 0.1rem;
    transition: opacity 0.125s 0.275s ease;
  }
  &--elastic &-inner::after {
    top: 2rem;
    transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  &--elastic.is-active &-inner {
    transform: translate3d(0, 1rem, 0) rotate(135deg);
    transition-delay: 0.075s;
  }
  &--elastic.is-active &-inner::before {
    transition-delay: 0s;
    opacity: 0;
  }
  &--elastic.is-active &-inner::after {
    transform: translate3d(0, -2rem, 0) rotate(-270deg);
    transition-delay: 0.075s;
  }

  /**
   * Elastic Reverse
   */
  &--elastic-r &-inner {
    top: 0.2rem;
    transition-duration: 0.275s;
    transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  &--elastic-r &-inner::before {
    top: 0.1rem;
    transition: opacity 0.125s 0.275s ease;
  }
  &--elastic-r &-inner::after {
    top: 2rem;
    transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  &--elastic-r.is-active &-inner {
    transform: translate3d(0, 1rem, 0) rotate(-135deg);
    transition-delay: 0.075s;
  }
  &--elastic-r.is-active &-inner::before {
    transition-delay: 0s;
    opacity: 0;
  }
  &--elastic-r.is-active &-inner::after {
    transform: translate3d(0, -2rem, 0) rotate(270deg);
    transition-delay: 0.075s;
  }

  /**
   * Slider
   */
  &--slider &-inner {
    top: 0.2rem;
  }
  &--slider &-inner::before {
    top: 1rem;
    transition-property: transform, opacity;
    transition-timing-function: ease;
    transition-duration: 0.15s;
  }
  &--slider &-inner::after {
    top: 2rem;
  }

  &--slider.is-active &-inner {
    transform: translate3d(0, 1rem, 0) rotate(45deg);
  }
  &--slider.is-active &-inner::before {
    transform: rotate(-45deg) translate3d(-5.71429px, -0.6rem, 0);
    opacity: 0;
  }
  &--slider.is-active &-inner::after {
    transform: translate3d(0, -2rem, 0) rotate(-90deg);
  }

  /**
   * Slider Reverse
   */
  &--slider-r &-inner {
    top: 0.2rem;
  }
  &--slider-r &-inner::before {
    top: 1rem;
    transition-property: transform, opacity;
    transition-timing-function: ease;
    transition-duration: 0.15s;
  }
  &--slider-r &-inner::after {
    top: 2rem;
  }

  &--slider-r.is-active &-inner {
    transform: translate3d(0, 1rem, 0) rotate(-45deg);
  }
  &--slider-r.is-active &-inner::before {
    transform: rotate(45deg) translate3d(0.571429rem, -0.6rem, 0);
    opacity: 0;
  }
  &--slider-r.is-active &-inner::after {
    transform: translate3d(0, -2rem, 0) rotate(90deg);
  }
}
</style>
