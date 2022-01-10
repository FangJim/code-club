/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let all = 1;
  let zeroNumbers = 0;
  let ans = Array(nums.length).fill(null);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroNumbers++;
    } else {
      all *= nums[i];
    }
  }
  if (zeroNumbers > 1) {
    ans.fill(0);
    return ans;
  } else if (zeroNumbers === 1) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0) {
        ans[i] = all;
      } else {
        ans[i] = 0;
      }
    }
  } else {
    for (let i = 0; i < nums.length; i++) {
      ans[i] = all / nums[i];
    }
  }
  return ans;
  console.log(ans);
};
let nums = [-1, 1, 0, -3, 3];
productExceptSelf(nums);
