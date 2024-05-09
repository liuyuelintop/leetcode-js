/**
 * Function to modify elements of an array in-place based on a provided condition.
 * @param {Array} arr - The array to be modified.
 * @param {Function} shouldTransform - A callback function that determines if the element should be transformed.
 * @param {Function} performTransform - A callback function that defines how to transform the array elements.
 * @return {number} The new length or state of the array after processing.
 */
export function inPlaceTransform(arr, shouldTransform, performTransform) {
  let left = 0;
  for (let right = 0; right < arr.length; right++) {
    if (shouldTransform(arr[right])) {
      performTransform(arr, left, right);
      left++;
    }
  }
  return left; // This might be the length or a different measurement based on the use case.
}

// Sample transformation function to swap elements
function swapElements(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

// Example usage
let nums = [0, 1, 0, 3, 12];
console.log("Before:", nums);
inPlaceTransform(nums, (value) => value !== 0, swapElements);
console.log("After:", nums);
