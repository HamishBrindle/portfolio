import router from '@/router.js';
import {
  USER_LOGIN,
  USER_LOGOUT,
  USER_UPDATE,
  NAVIGATION_INDEX,
} from '@/store/types/actions.js';
import {
  LOGIN_START,
  LOGIN_STOP,
  SET_USER_DATA,
  CLEAR_USER_DATA,
  UPDATE_USER_DATA,
} from '@/store/types/mutations.js';
import {
  GET_USER,
} from '@/store/types/getters.js';
import gql from 'graphql-tag';
import { apolloClient } from '@/apollo';

const namespace = 'hb-portfolio';
let loginTimer = null;

export default {
  state: {
    user: null,
    loggingIn: false,
    loginError: null,
    loginTimer: null,
  },
  mutations: {
    [LOGIN_START](state) {
      state.loggingIn = true;
    },
    [LOGIN_STOP](state, error) {
      state.loggingIn = false;
      state.loginError = error;
    },
    [SET_USER_DATA](state, { user }) {
      state.user = user;
      localStorage.setItem(`${namespace}_user`, JSON.stringify(state.user));
    },
    [CLEAR_USER_DATA](state) {
      state.user = null;
      localStorage.removeItem(`${namespace}_user`);
    },
    [UPDATE_USER_DATA](state, { user }) {
      state.user = user;
    },
  },
  actions: {
    async [USER_LOGIN]({ commit, dispatch }, { email, password }) {
      commit(LOGIN_START);
      try {
        const { data } = await apolloClient.mutate({
          mutation: gql`
          mutation signIn($email: String!, $password: String!) {
            signIn(email: $email, password: $password) {
              id
              name
              email
              permissions
              lastLoggedIn
            }
          }`,
          variables: {
            email,
            password,
          },
        });

        const user = data.signIn;

        if (!user) {
          throw new Error('Invalid user credentials or unable to find this account');
        }

        // Successful login - proceed
        commit(LOGIN_STOP, null);
        commit(SET_USER_DATA, { user });
        dispatch(NAVIGATION_INDEX, '-1');
        router.push({ name: 'dashboard' });
      } catch (error) {
        // Prevent spamming of invalid credentials
        console.error(error);
        clearTimeout(loginTimer);
        loginTimer = setTimeout(() => {
          commit(LOGIN_STOP, error);
        }, 1500);
      }
    },
    async [USER_LOGOUT]({ commit }) {
      const { data } = await apolloClient.mutate({
        mutation: gql`
        mutation signOut {
          signOut {
            message
          }
        }`,
        variables: {},
      });

      const { message } = data.signOut;

      if (!message) {
        throw new Error('Unable to sign-out (wtf!?)');
      }

      commit(CLEAR_USER_DATA);
      router.push({ name: 'login' });
    },
    async [USER_UPDATE]({ commit }, _user = null) {
      let user = _user;
      try {
        user = JSON.parse(localStorage.getItem(`${namespace}_user`));
      } catch (error) {
        localStorage.removeItem(`${namespace}_user`);
      }
      commit(UPDATE_USER_DATA, { user });
    },
  },
  getters: {
    [GET_USER]: state => state.user,
  },
};
