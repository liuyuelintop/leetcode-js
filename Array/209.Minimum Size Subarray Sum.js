/**
 * @method sliding windows
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let start = end = 0;
    let len = nums.length;
    let sum  = 0;
    let ans = Infinity;
    while(end < len){
        sum += nums[end];
        while(sum >= target){
            ans = Math.min(ans, end-start+1)
            sum -= nums[start]
            start ++;
        }
        end++;
    }
    return ans === Infinity ? 0 : ans;
};

console.log(minSubArrayLen(7,[1,1,1,1,1]))