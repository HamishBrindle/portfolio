<template>
  <m-container direction="vertical">
    Projects Index Wrapper
    <transition
      name="slide"
      mode="out-in"
    >
      <router-view />
    </transition>
  </m-container>
</template>

<script>
export default {
  name: 'Projects',
  componentName: 'Projects',
};
</script>
