const util = require('util');

/**
 * Converts function to Promise; enables use of then/catch
 * 
 * @param {Function} fn - to promisfy
 * 
 * @returns {Promise}
 */
const promisify = (fn) => util.promisify(fn);

module.exports = {
  promisify
}