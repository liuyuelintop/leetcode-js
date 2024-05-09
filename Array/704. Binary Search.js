/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let lo = 0, hi = nums.length-1;
    while(lo <= hi){
        let mid = Math.floor(lo+(hi-lo)/2)
        if(nums[mid]<target){
            lo = mid + 1;
        }else if(nums[mid]>target){
            hi = mid -1;
        }else{
            return mid;
        }
    }
    return -1;
};

console.log(search([-1,0,3,5,9,12],19))