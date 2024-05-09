/**
 * Squares each element of a sorted array and returns a new array of the squares sorted in non-decreasing order.
 * @param {number[]} nums - The input sorted array.
 * @return {number[]} - The sorted array of squares.
 */
const sortedSquares = (nums) => {
  if (nums.length === 0) return [];

  const len = nums.length;
  const res = new Array(len);
  let k = len - 1; // Initialize the pointer for the result array from the end

  for (let i = 0, j = len - 1; i <= j; ) {
    const lsq = nums[i] * nums[i];
    const rsq = nums[j] * nums[j];
    res[k--] = lsq > rsq ? lsq : rsq;
    lsq > rsq ? i++ : j--;
  }

  return res;
};
