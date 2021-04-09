/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arr = s2.split('');
  let count = 0;

  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (s1[i] === arr[j]) {
        count++;
        arr.splice(j, 1);
        break;
      }
    }
  }

  return count;
}

module.exports = getCommonCharacterCount;
