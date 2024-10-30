/**
 * Given number n (-1000000 <= n <= 1000000). Create a function that counts sum of all digits
 * @param {number} n - number
 * @returns {number}
 */
module.exports.digitsSum = function digitsSum(n) {
  let digits = Math.abs(n).toString().split('');
  let sum = digits.reduce((acc, digit) => acc + Number(digit), 0);

  return sum;
};
