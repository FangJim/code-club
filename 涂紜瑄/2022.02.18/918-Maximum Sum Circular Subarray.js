/**
 * https://leetcode.com/problems/maximum-sum-circular-subarray/
 * https://leetcode.jp/leetcode-918-maximum-sum-circular-subarray-%E8%A7%A3%E9%A2%98%E6%80%9D%E8%B7%AF%E5%88%86%E6%9E%90/
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubarraySumCircular = function(nums) {
    let sum = 0;
    let total = 0;
    let max = Math.max(...nums);
    let min = Math.min(...nums);
    
    //第一種情況:不循環陣列
    for ( let n in nums ){
        if( nums[n] > nums[n]+sum ) sum = nums[n];
        else sum+=nums[n];  
        max = Math.max(max,sum);
    }
    // return max;

    // 第二種情況:循環陣列。找出最小區間和，(全部-min=最大值)。
    sum = 0;
    for ( let n in nums ){
        total += nums[n];
        if ( nums[n] < nums[n]+sum ) sum = nums[n];
        else sum+=nums[n];
        min=Math.min(min,sum);
    }
    if ( min==total ) return max;    //如果最小值等於總和（全是負數），返回max

    return Math.max(max, total-min); //返回兩種情況的最大值
};

console.log(maxSubarraySumCircular([1,-2,3,-2]));   //3
console.log(maxSubarraySumCircular([5,-3,5]));      //10
console.log(maxSubarraySumCircular([-3,-2,-3]));    //-2