/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const num = n.toString().split('');

  for (let i = 0; i < num.length - 1; i++) {
    for (let j = i + 1; j < num.length; j++) {
      if (num[j] < num[i]) {
        const min = num[j];
        num[j] = num[i];
        num[i] = min;
      }
    }
  }

  return +n.toString().replace(num[0], '');
}

module.exports = deleteDigit;
