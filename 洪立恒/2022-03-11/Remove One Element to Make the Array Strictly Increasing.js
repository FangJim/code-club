/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function (nums) {
  let NumsLength = nums.length;
  let Count = 0;
  for (let i = 1; i < NumsLength; i++) {
    if (nums[i] <= nums[i - 1]) {
      Count++;
    }
    if (nums[i] <= nums[i - 2]) nums[i] = nums[i - 1];
  }
  return Count <= 1;
};
