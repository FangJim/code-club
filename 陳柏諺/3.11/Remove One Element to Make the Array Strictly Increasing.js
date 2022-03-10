/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canBeIncreasing = function(nums) {
    let asc = true;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= nums[i + 1]) {
            if (asc) {
                if (i - 1 < 0 || nums[i + 1] > nums[i - 1]) {
                    asc = false
                } else if (i + 2 >= nums.length || nums[i + 2] > nums[i]) {
                    asc = false;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
    }
    return true;
}
console.log(canBeIncreasing([2, 3, 1, 2]))