/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start
 * @param {number|string} end
 * @returns {number}
 */
module.exports.sumInRange = function sumInRange(start, end) {
  start = Number(start);
  if (start > end) [start, end] = [end, start];
  const sum = ((end - start + 1) * (start + end)) / 2;

  return sum;
};
