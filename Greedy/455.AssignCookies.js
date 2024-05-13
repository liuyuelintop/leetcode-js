/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  const cookieNums = s.length;
  if (cookieNums === 0) return 0;
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let maxNums = 0;
  let cookieIndex = cookieNums - 1;
  let childIndex = g.length - 1;
  while (cookieIndex >= 0 && childIndex >= 0) {
    if (s[cookieIndex] >= g[childIndex]) {
      maxNums++;
      cookieIndex--;
      childIndex--;
    } else {
      childIndex--;
    }
  }
  return maxNums;
};
