/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
    let Opt = new Array(nums).fill(null)
    let count = 0
    for(let i = 0;i<nums.length;i++){
        for(let j = 0;j<nums.length;j++){
            if(nums[i]>nums[j])count++
        }
        Opt[i] = count
        count = 0
    }
    return Opt
};
