<template>
  <m-container
    v-loading="loggingIn"
    class="login__container"
    direction="horizontal"
  >
    <m-main>
      <m-row class="login__form">
        <m-col
          :xs="24"
          :sm="10"
          :md="8"
          :lg="6"
          :xl="4"
        >
          <m-card>
            <h1 class="login__greeting">
              {{ welcomeMessage }}
            </h1>
            <m-form
              ref="loginForm"
              :rules="loginFormRules"
              :model="loginForm"
            >
              <m-form-item
                label="Email"
                prop="email"
              >
                <m-input
                  v-model="loginForm.email"
                  @keyup.enter.native="onInputKeyup('email')"
                >
                  <m-icon
                    slot="suffix"
                    name="user"
                    height="1.8"
                    width="1.8"
                  />
                </m-input>
              </m-form-item>
              <m-form-item
                label="Password"
                prop="password"
              >
                <m-input
                  v-model="loginForm.password"
                  type="password"
                  show-password
                  @keyup.enter.native="onInputKeyup('loginForm')"
                >
                  <m-icon
                    slot="suffix"
                    name="key"
                    height="1.5"
                    width="1.5"
                  />
                </m-input>
              </m-form-item>
              <m-form-item>
                <m-button
                  type="primary"
                  @click="submitForm('loginForm')"
                >
                  Login
                </m-button>
              </m-form-item>
            </m-form>
          </m-card>
        </m-col>
      </m-row>
    </m-main>
  </m-container>
</template>

<script>
import { mapState } from 'vuex';
import { LOGIN_STOP } from '@/store/types/mutations.js';
import { USER_LOGIN } from '@/store/types/actions.js';

export default {
  data() {
    return {
      welcomeMessage: 'Goons only.',
      loginForm: {
        email: '',
        password: '',
      },
      loginFormRules: {
        email: [
          {
            required: true,
            message: 'Please input an email',
            trigger: 'blur',
          },
        ],
        password: [
          {
            required: true,
            message: 'Please provide a password',
            trigger: 'blur',
          },
        ],
      },
    };
  },
  computed: {
    ...mapState({
      loggingIn: state => state.user.loggingIn,
    }),
  },
  mounted() {
    // Listen for any mutations that take place in store
    this.$store.subscribe((mutation, state) => {
      switch (mutation.type) {
        case LOGIN_STOP: {
          const { loginError } = state.user;
          if (loginError) {
            this.$message({
              showClose: true,
              message: loginError.message,
              type: 'error',
            });
          }
          break;
        }
        default: {
          break;
        }
      }
    });
  },
  methods: {
    onInputKeyup() {},
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const credentials = {
            email: this.loginForm.email,
            password: this.loginForm.password,
          };

          this.$store.dispatch(USER_LOGIN, credentials);
        }
      });
    },
  },
};
</script>

<style lang="scss">
.login__greeting {
  text-align: center;
}
.login__container {
  .m-main {
    padding-top: 0;
    padding-bottom: 0;
  }
}
.login__form {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .m-form-item.is-required label::before {
    display: none;
  }
  .m-form-item.is-error .m-input .el-input__suffix {
    color: map-get($colors, danger);
  }
}
</style>
