/**
 * Write a function which for every numbers (negative/positive numbers, zeros) in given array replaces:
 *  one digit numbers with number 1
 *  two digits numbers with number 2
 *  three digits numbers with number 3
 *  the rest numbers with number 4
 * @param {Array<number>} arr
 * @returns {Array<number>}
 */
module.exports.replacement = function replacement(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 10 === arr[i]) {
      arr[i] = 1;
    } else if (arr[i] % 100 === arr[i]) {
      arr[i] = 2;
    } else if (arr[i] % 1000 === arr[i]) {
      arr[i] = 3;
    } else {
      arr[i] = 4;
    }
  }

  return arr;
};
