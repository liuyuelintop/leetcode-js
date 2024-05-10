/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  if (nums.length === 0) return 0;
  let left = (right = 0);
  let len = nums.length;
  let sum = 0;
  let minSize = Infinity;

  while (right < len) {
    sum += nums[right]; // Add the current number to the sum
    while (sum >= target) {
      minSize = Math.min(minSize, right - left + 1);
      sum -= nums[left++];
    }
    right++;
  }
  return minSize === Infinity ? 0 : minSize;
};
