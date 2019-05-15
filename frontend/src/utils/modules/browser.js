export default {
  /**
   * Retreive a cookie from the browser.
   *
   * @example
   * getCookie('token') // return token or `null`.
   */
  getCookie: name => document.cookie
    .split(';').filter(item => item.trim().startsWith(`${name}=`))[0] || null,
};
