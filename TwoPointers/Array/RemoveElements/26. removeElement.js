/**
 * Remove all occurrences of val in nums in-place.
 * Return the number of elements in nums which are not equal to val.
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  var left = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== val) {
      nums[left] = nums[right];
      left++;
    }
  }

  return left;
};
