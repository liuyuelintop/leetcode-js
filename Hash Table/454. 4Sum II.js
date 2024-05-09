// Given four integer arrays nums1, nums2, nums3, and nums4 all of length n,
// return the number of tuples (i, j, k, l) such that:
// 0 <= i, j, k, l < n
// nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0

/**
 * 首先定义 一个unordered_map，key放a和b两数之和，value 放a和b两数之和出现的次数。
 * 遍历大A和大B数组，统计两个数组元素之和，和出现的次数，放到map中。
 * 定义int变量count，用来统计 a+b+c+d = 0 出现的次数。
 * 在遍历大C和大D数组，找到如果 0-(c+d) 在map中出现过的话，
 * 就用count把map中key对应的value也就是出现次数统计出来。
 * 最后返回统计值 count 就可以了
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    const twoSumMap = new Map();
    let count = 0;
    // 统计nums1和nums2数组元素之和，和出现的次数，放到map中
    for(const n1 of nums1){
        for(const n2 of nums2){
            let sum = n1+n2;
            twoSumMap.set(sum, (twoSumMap.get(sum) || 0)  + 1);
        }
    }
    // 找到如果 0-(c+d) 在map中出现过的话，就把map中key对应的value也就是出现次数统计出来
    for(const n3 of nums3){
        for(const n4 of nums4){
            let sum =n3+n4;
            count += (twoSumMap.get(0-sum) || 0)
        }
    }
    return count;
};