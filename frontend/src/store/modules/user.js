import Vue from 'vue';
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
// import SIGNIN_MUTATION from '@/apollo/graphql/Authenticate.gql';
import gql from 'graphql-tag';
import { apolloClient } from '@/apollo';

const namespace = 'madison-b2b';
const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return false;
};

let loginTimer = null;

export default {
  state: {
    user: null,
    auth: null,
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
    [SET_USER_DATA](state, { user, auth }) {
      state.user = user;
      state.auth = auth;
      localStorage.setItem(`${namespace}_user`, JSON.stringify(state.user));
      localStorage.setItem(`${namespace}_auth`, JSON.stringify(state.auth));
    },
    [CLEAR_USER_DATA](state) {
      state.user = null;
      state.auth = null;
      localStorage.removeItem(`${namespace}_user`);
      localStorage.removeItem(`${namespace}_auth`);
    },
    [UPDATE_USER_DATA](state, { user, auth }) {
      state.user = user;
      state.auth = auth;
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
              email
              name
            }
          }`,
          variables: {
            email,
            password,
          },
        });

        const user = data.signIn;
        const auth = null; // TODO: How the fuck do we access our token?!

        commit(LOGIN_STOP, null);
        commit(SET_USER_DATA, { user, auth });

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
    [USER_LOGOUT]({ commit }) {
      commit(CLEAR_USER_DATA);
      router.push({ name: 'login' });
    },
    [USER_UPDATE]({ commit }) {
      let user = null;
      let auth = null;
      try {
        user = JSON.parse(localStorage.getItem(`${namespace}_user`));
        auth = JSON.parse(localStorage.getItem(`${namespace}_auth`));
      } catch (error) {
        localStorage.removeItem(`${namespace}_user`);
        localStorage.removeItem(`${namespace}_auth`);
      }
      commit(UPDATE_USER_DATA, { user, auth });
    },
  },
  getters: {
    [GET_USER]: state => state.user,
  },
};
