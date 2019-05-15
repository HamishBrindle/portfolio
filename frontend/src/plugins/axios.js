/* eslint-disable no-unused-expressions */
import axios from 'axios';

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const params = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const DEBUG = true;

const _axios = axios.create(params);

_axios.interceptors.request.use((config) => {
  // Do something before request is sent (ex. attach tokens)
  // ...
  DEBUG && console.log('axios: config:', config);
  return config;
}, (error) => {
  // Do something with request error
  // ...
  DEBUG && console.error('axios: error:', error);
  return Promise.reject(error);
});

// Add a response interceptor
_axios.interceptors.response.use((response) => {
  // Do something with response data
  // ...
  DEBUG && console.log('axios: response:', response);
  return response;
}, (error) => {
  // Do something with response error
  // ...
  DEBUG && console.error('axios: error:', error);
  return Promise.reject(error);
});

Plugin.install = (Vue) => {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      },
    },
    $axios: {
      get() {
        return _axios;
      },
    },
  });
};

export default Plugin;
