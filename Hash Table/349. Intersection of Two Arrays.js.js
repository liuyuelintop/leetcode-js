/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    if(nums1.length < nums2.length){
        let temp = nums1;
        nums1 = nums2;
        nums2 = temp;
    }
    const nums1Set = new Set(nums1);
    const retSet = new Set();
    for(let i = 0; i < nums2.length; i++){
        nums1Set.has(nums2[i]) && retSet.add(nums2[i]);
    }
    return Array.from(retSet)
};