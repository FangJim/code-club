/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  nums.sort((a, b) => {
    if (a < b) return 1;
    return -1;
  });
  let nl = nums.length;
  let number = [];
  let count = [];
  let j = 0;
  number[0] = nums[0];
  count[0] = 0;
  let ans = [];
  for (let i = 0; i < nl; i++) {
    if (nums[i] === number[j]) {
      count[j] = count[j] + 1;
    } else {
      ++j;
      number[j] = nums[i];
      count[j] = 1;
    }
  }
  for (let i = 0; i < number.length; i++) {
    let minIndex = count.indexOf(Math.min(...count));
    for (let k = 0; k < Math.min(...count); k++) {
      ans.push(number[minIndex]);
    }
    count[minIndex] = 100;
  }
  console.log(ans);
  return ans;
};
let nums = [-1, 1, -6, 4, 5, -6, 1, 4, 1];
frequencySort(nums);
