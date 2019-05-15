/**
 * An error thrown when duetime elapses.
 *
 * @see {@link timeout}
 *
 * @class TimeoutError
 */
export default class TimeoutError extends Error {
  constructor(msg) {
    const err = super(msg || 'Timeout has occurred.');
    err.name = 'TimeoutError';
    this.name = err.name;
    this.stack = err.stack;
    this.message = err.message;
  }
}
