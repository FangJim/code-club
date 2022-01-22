/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    //map -> O(n)

    let TempNums = 1
    let fault = []
    let NumsLength = nums.length
    for (let i = 0; i < NumsLength; i++) {
        if (nums[i] < 0) fault.push(i);
        TempNums *= nums[i]
    }
    //O(n)
    for (let i = 0; i < NumsLength; i++) {
        nums[i] = TempNums / nums[i]
    }
};

let nums = [1, 2, 3, 4]
console.log(productExceptSelf(nums))
    //輸出其他數相乘結果（只有正整數）