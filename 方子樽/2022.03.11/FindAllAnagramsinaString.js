/**
 * @param {number[]} nums
 * @return {boolean}
 */

//  nums = [1,2,10,5,7]
// nums = [2,3,1,2]
//  -
//-     -
//    -
const canBeIncreasing = (nums) => {
  let goingDown_sum = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      goingDown_sum++;
      //我移走了會不會變下坡
      if (nums[i] <= nums[i - 2]) nums[i] = nums[i - 1];
    }
  }
  return goingDown_sum <= 1;
};

console.log(canBeIncreasing([1, 2, 10, 5, 7]));
