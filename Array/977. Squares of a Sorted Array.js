/**
 * @method Two Pointers
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let n = nums.length;
    let i = 0, j = n-1, k = n-1;
    let res = Array(n).fill(0);
    while(i<=j){
        let l = nums[i]*nums[i];
        let r = nums[j]*nums[j];
        if(l < r){
            res[k--] = r;
            j--;
        }else{
            res[k--] = l;
            i++;
        }
    }
    return res;
};