/**
 * 1. 用Kadane's演算法
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
    let max = nums[0];
    let sum = null;
    for (let i of nums) {
        sum = Math.max(sum + i, sum);
        max = Math.max(sum, max)
    }
    return max
};