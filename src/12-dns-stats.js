/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};

  for (let i = 0; i < domains.length; i++) {
    let count = 0;
    const domain = domains[i].replace(/(.*)\./gm, '');
    const arr = domains[i].split('.');
    let str = `.${domain}`;
    for (let j = arr.length - 1; j >= 0; j--) {
      if (arr[j] !== domain) {
        str += `.${arr[j]}`;
        obj[`${str}`] = arr.length - ++count;
      } else {
        obj[`.${domain}`] = arr.length - 1;
      }
    }
  }

  return obj;
}

module.exports = getDNSStats;
