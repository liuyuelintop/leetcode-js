/**
 * Removes all duplicate elements from the input array and returns the length of the new array.
 *
 * @param {number[]} nums - The input array containing integers.
 * @return {number} - The length of the new array after removing duplicates.
 */
var removeDuplicates = function (nums) {
  if (nums.length === 0) {
    return 0;
  }

  let l = 0; // left index represents the index of the last unique elements in the array
  for (let r = 1; r < nums.length; r++) {
    if (nums[r] !== nums[l]) {
      nums[++l] = nums[r]; // Overwrite the next unique element
    }
  }
  return l + 1;
};
