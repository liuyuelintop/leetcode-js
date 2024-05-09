//This problem requires us to process the string in segments of every 2k characters.
// In each segment, the first k characters should be reversed,
// while the next k characters should remain unchanged. 
//This process should be repeated until the entire string has been processed.
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    const len = s.length;
    let resArr = s.split("");
    for(let i = 0; i<len; i+=2*k){
        let l = i-1; r=i+k>len ? len:i+k;
        while(++l<--r) [resArr[l], resArr[r]] = [resArr[r], resArr[l]];
    }
    return resArr.join("");
};