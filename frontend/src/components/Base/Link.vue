<template>
  <router-link
    class="m-link"
    :tag="tag"
    :to="to"
    :replace="replace"
    :append="append"
    :active-class="activeClass"
    :exact="exact"
    :event="event"
    :exact-active-class="exactActiveClass"
  >
    <slot />
  </router-link>
</template>

<script>
export default {
  props: {
    to: {
      type: [String, Object],
    },
    replace: {
      type: Boolean,
      default: false,
    },
    append: {
      type: Boolean,
      default: false,
    },
    tag: {
      type: String,
      default: 'a',
    },
    activeClass: {
      type: String,
      default: 'router-link-active',
    },
    exact: {
      type: Boolean,
      default: false,
    },
    event: {
      type: [String, Array],
      default: 'click',
    },
    exactActiveClass: {
      type: String,
      default: 'router-link-exact-active',
    },
  },
};
</script>

<style>

</style>
