/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
  const reducer = (accumulator, curr) => accumulator + curr;
  let total = nums.reduce(reducer);
  let preMax = 0;
  let preMin = 0;
  let maxValue = Math.max(...nums);
  let minValue = Math.min(...nums);
  let nl = nums.length;
  for (let i = 0; i < nl; i++) {
    preMax += nums[i];
    preMin += nums[i];
    if (preMax > maxValue) {
      maxValue = preMax;
    }
    if (preMin < minValue) {
      minValue = preMin;
    }
    if (preMax < 0) {
      preMax = 0;
    }
    if (preMin > 0) {
      preMin = 0;
    }
  }
  console.log("max:" + maxValue);
  console.log("min:" + minValue);
  if (total === minValue) {
    return Math.max(maxValue, minValue);
  }
  return Math.max(maxValue, total - minValue);
};
let nums = [-3, -2, -3];
console.log(maxSubarraySumCircular(nums));
