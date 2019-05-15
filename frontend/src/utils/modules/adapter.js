import TimeoutError from '@/utils/errors/TimeoutError.js';

export default {
  /**
   * Converts an asynchronous function to return a promise.
   *
   * Use currying to return a function returning a Promise that calls the
   * original function. Use the ...rest operator to pass in all the parameters.
   */
  promisify: func => (...args) => new Promise((resolve, reject) => {
    func(...args, (err, result) => (err ? reject(err) : resolve(result)));
  }),

  /**
   * Execute a promise with a timeout.
   */
  timeoutPromise: (promise, ms) => {
    // Create a promise that rejects in <ms> milliseconds
    const timeout = new Promise((resolve, reject) => {
      const id = setTimeout(() => {
        clearTimeout(id);
        reject(new TimeoutError(`Timed out in ${ms}ms.`));
      }, ms);
    });

    // Returns a race between our timeout and the passed in promise
    return Promise.race([
      promise,
      timeout,
    ]);
  },
};
