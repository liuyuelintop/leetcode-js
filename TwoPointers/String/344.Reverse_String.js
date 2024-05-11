/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  if (s.length === 0) return [];
  let len = s.length;
  let l = 0,
    r = len - 1;
  for (; l < len / 2; l++) {
    [s[l], s[r]] = [s[r], s[l]];
    r--;
  }
  return s;
};

// var reverseString = function(s) {
//     let l = 0, r=s.length-1;
//     while(l<r){
//         [s[l], s[r]] = [s[r], s[l]];
//         l++;
//         r--;
//     }
//     return s;
// };
