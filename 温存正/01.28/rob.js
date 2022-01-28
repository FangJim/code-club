/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let nl = nums.length;
  let ans = 0;
  let odd = 0;
  let even = 0;
  for (let i = 0; i < nl; i++) {
    i % 2 === 0 ? (even += nums[i]) : (odd += nums[i]);
  }
  for (let i = 0; i < nl; i++) {
    let index = nums.indexOf(Math.max(...nums));
    let tmp = index;
    if (nums[--tmp] != 0 && nums[(tmp += 2)] != 0) {
      ans += nums[index];
      nums[index] = 0;
    } else {
      nums[index] = -1;
    }
  }
  ans = Math.max(ans, odd, even);
  console.log(ans);
  return ans;
};
let nums = [2, 7, 9, 3, 1];
rob(nums);
