/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let len = s.length;
  let res = [...s];
  for (let i = 0; i < len; i += 2 * k) {
    let l = i - 1;
    let r = i + k > len ? len : i + k;
    while (++l < --r) {
      [res[l], res[r]] = [res[r], res[l]];
    }
  }
  return res.join("");
};
