/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let leftArray = [];
  let rightArray = [];
  let ans = [];
  let nl = nums.length;
  leftArray[0] = 1;
  rightArray[nl - 1] = 1;
  for (let i = 1; i < nl; i++) {
    leftArray[i] = nums[i - 1] * leftArray[i - 1];
  }
  for (let i = nl - 2; i >= 0; i--) {
    rightArray[i] = nums[i + 1] * rightArray[i + 1];
  }
  for (let i = 0; i < nl; i++) {
    ans[i] = leftArray[i] * rightArray[i];
  }
  return ans;
  console.log(ans);
};
let nums = [-1, 1, 0, -3, 3];
productExceptSelf(nums);
