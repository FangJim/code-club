/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let first = 0;
  let second = 0;
  let tmp = 0;
  let nl = nums.length;
  if (nl === 1) {
    return nums[0];
  }
  first = nums[0];
  second = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nl; i++) {
    tmp = Math.max(first + nums[i], second);
    first = second;
    second = tmp;
  }
  console.log(second);
  return second;
};
let nums = [10, 1, 20, 1, 1, 30];
rob(nums);
