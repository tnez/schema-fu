import { is } from 'ramda'

/**
 * @param {Function} evaluator function that should return falsey if the
 * validation should fail
 * @param {String} errorMsg string that optionally contains a special
 * placeholder `_x_` that will form the message of the returned error object
 * @param {Array} prereqs an optional array of rules that should be run before
 * this rule, if not provided will default to an empty array, signifying no
 * prereqs exist
 * @returns {Object}
 *
 */
function defineRule (evaluator, errorMsg, prereqs = []) {
  if (!is(Function, evaluator)) {
    throw new Error('evaluator: expected a Function')
  }

  if (!is(String, errorMsg)) {
    throw new Error('errorMsg: expected a String')
  }

  if (!is(Array, prereqs)) {
    throw new Error('prereqs: expected an (optional) Array')
  }

  return {
    evaluator,
    errorMsg: x => errorMsg.replace(/_x_/, x),
    prereqs,
  }
}

export { defineRule }
