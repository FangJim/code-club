/**
 * @param {number[]} nums
 * @return {number[]}
 * 1. 解題思路參考 https://www.cnblogs.com/grandyang/p/4650187.html
 * 2. 對於某一個數字，如果我們知道其前面所有數字的乘積，同時也知道後面所有的數乘積，那麼二者相乘就是我們要的結果
 */
var productExceptSelf = function(nums) {
    let sum = 1;
    let answer = [];
    for (let i = 0; i < nums.length; i++) {
        answer[i] = sum;
        sum *= nums[i]
    }

    sum = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        answer[i] *= sum;
        sum *= nums[i]
    }
    return answer
};