/**
 * Write a function that receive 2 parameters function {fn} and delay {delay} (in milliseconds)
 * and returns another function which will pass invocation of {fn} only once during the delay period
 * @fn {function}
 * @delay {number}
 * @return {function}
 */
module.exports.debounce = function debounce(fn, delay) {
  let timeoutNum = null;
  let lastCall = null;

  return function (...args) {
    lastCall = args;

    if (!timeoutNum) {
      fn.apply(this, lastCall);
    }

    clearTimeout(timeoutNum);

    timeoutNum = setTimeout(() => {
      timeoutNum = null;
      if (lastCall) {
        fn.apply(this, lastCall);
      }
    }, delay);
  };
};
