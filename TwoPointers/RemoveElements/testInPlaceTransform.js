import { inPlaceTransform } from "./inPlaceTransform.js";
function swapElements(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

// 1. Remove all occurrences of val from an array
function removeElement(nums, val) {
  return inPlaceTransform(nums, (value) => value !== val, swapElements);
}

// 2. Remove duplicates from a sorted array
function removeDuplicates(nums) {
  return inPlaceTransform(
    nums,
    (value, idx) => idx === 0 || nums[idx - 1] !== value,
    swapElements
  );
}

// 3. Move zeroes to the end of the array
function moveZeroes(nums) {
  return inPlaceTransform(nums, (value) => value !== 0, swapElements);
}

// 4. Quick sort partition function
function partition(arr, left, right) {
  const pivot = arr[right];
  let pivotIndex =
    inPlaceTransform(arr, (value) => value < pivot, swapElements) - 1;
  swapElements(arr, pivotIndex + 1, right); // Move the pivot to its correct position
  return pivotIndex + 1;
}

// Example usage of each function
let nums1 = [3, 2, 2, 3];
console.log("\nOriginal Array:", [...nums1]);
console.log("Elements after removing 3:", removeElement(nums1, 3), nums1);

let nums2 = [1, 1, 2];
console.log("\nOriginal Array:", [...nums2]);
console.log("Array after duplicates removed:", removeDuplicates(nums2), nums2);

let nums3 = [0, 1, 0, 3, 12];
console.log("\nOriginal Array:", [...nums3]);
console.log("Array after moving zeroes:", moveZeroes(nums3), nums3);

let nums4 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log("\nOriginal Array:", [...nums4]);
console.log("New pivot index:", partition(nums4, 0, nums4.length - 1), nums4);
