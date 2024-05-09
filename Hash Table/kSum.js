function Nsum(nums, target, N, start, result, results) {
    if (N < 2 || nums.length < N) return;

    // 两数之和，使用双指针方法
    if (N === 2) {
        let left = start, right = nums.length - 1;
        while (left < right) {
            const sum = nums[left] + nums[right];
            if (sum === target) {
                results.push([...result, nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    } else {
        for (let i = start; i < nums.length - N + 1; i++) {
            if (i > start && nums[i] === nums[i - 1]) continue;
            Nsum(nums, target - nums[i], N - 1, i + 1, [...result, nums[i]], results);
        }
    }
}

function kSum(nums, target, k) {
    nums.sort((a, b) => a - b);
    const results = [];
    Nsum(nums, target, k, 0, [], results);
    return results;
}

const nums = [1, 0, -1, 0, -2, 2];
const target = 0;
const k = 4; // 四数之和
const result = kSum(nums, target, k);
console.log(result);

let a = [-1, 0, 1, 2, -1, -4];
console.log(kSum(a,0,3));