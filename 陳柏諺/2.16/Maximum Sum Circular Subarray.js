/**
 * 1  配合Kadane's演算法和看圖解之後可以知道要求最大值的話=max(the max subarray sum,the total sum-the min subarray sum)
 * 2. 最後如果整個數列都是負數要返回max
 * @param {number[]} nums
 * @return {number}
 */
const maxSubarraySumCircular = function(nums) {
    let max = nums[0];
    let min = nums[0];
    let curmax = 0;
    let curmin = 0;
    let sum = null;
    for (let i of nums) {
        curmin = Math.min(curmin + i, i);
        min = Math.min(curmin, min);
        curmax = Math.max(curmax + i, i);
        max = Math.max(curmax, max);
        sum += i;
    }
    return curmax > 0 ? Math.max(max, sum - min) : max
};
console.log(maxSubarraySumCircular([-3, -2, -3]))