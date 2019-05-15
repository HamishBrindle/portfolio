<template>
  <div class="fullscreen__wrapper">
    <!-- <m-navbar /> -->
    <m-container class="fullscreen">
      <transition
        name="fade"
        mode="out-in"
      >
        <slot />
      </transition>
    </m-container>
  </div>
</template>

<style lang="scss">
.fullscreen {
  height: 100vh;
  background: map-get($colors, backgroundBase);
}
</style>
