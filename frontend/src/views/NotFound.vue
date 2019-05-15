<template>
  <m-container
    direction="horizontal"
    class="not-found__wrapper"
  >
    <m-main class="not-found">
      <m-row class="not-found__row">
        <m-col
          :xs="24"
          :sm="12"
          :md="10"
          :lg="8"
          :xl="6"
        >
          <m-card>
            <div
              slot="header"
              class="not-found__header"
            >
              <m-icon
                name="alert-circle"
                height="5"
                width="5"
                class="not-found__icon"
              />
              <h1
                slot="header"
                class="not-found__title"
              >
                404!
              </h1>
            </div>
            <p class="not-found__message">
              We were unable to find the page you're looking for - <strong>sorry!</strong>
            </p>
            <div class="not-found__navigate">
              <p>Click here to go back</p>
              <m-button
                type="primary"
                size="small"
                round
                @click="goHome"
              >
                Home
              </m-button>
            </div>
          </m-card>
        </m-col>
      </m-row>
    </m-main>
  </m-container>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push({ name: 'home' });
    },
  },
};
</script>


<style lang="scss">
.not-found {
  display: flex;
  align-items: center;
  &__wrapper {
    background: map-get($colors, backgroundBase);
  }
  &__row {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  &__header {
    display: flex;
    justify-content: center;
  }
  &__icon {
    color: map-get($colors, danger);
    margin-right: 1rem;
  }
  &__message {
    font-size: 2rem;
  }
  &__navigate {
    margin: 4rem 0 2rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: map-get($colors, textSecondary);
    p {
      margin-right: 1rem;
    }
  }
}
</style>
