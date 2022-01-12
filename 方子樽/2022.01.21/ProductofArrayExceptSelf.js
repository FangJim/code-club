/**
 * 1. 計算該數左邊的乘積 紀錄於ans
 * 2. 計算該數右邊的乘積 並乘該位置ans之值
 * @param {number[]} nums
 * @return {number[]}
 */
let productExceptSelf = (nums) => {
    let length = nums.length
    let temp = 1
    let ans = []
    for (let i = 0; i < length; i++) {
        ans[i] = temp
        temp *= nums[i]
    }
    temp = 1
    for (let i = length - 1; i >= 0; i--) {
        ans[i] *= temp
        temp *= nums[i]
    }
    return ans
};
console.log(productExceptSelf([1, 2, 3, 4]))