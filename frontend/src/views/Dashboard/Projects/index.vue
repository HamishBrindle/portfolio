<template>
  <m-container direction="vertical">
    <transition
      name="slide-fade"
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
