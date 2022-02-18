/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubarraySumCircular = function (nums) {
//     let NumsLength = nums.length;
//     let CountNum = new Map();
//     let TargetNum = 0;
//     let Target = nums[0];
//     for (let i = 0; i < NumsLength; i++) {
//       if (!CountNum.has(nums[i])) {
//         CountNum.set(nums[i], 1);
//       } else {
//         CountNum.set(nums[i], CountNum.get(nums[i]) + 1);
//       }
//       if (CountNum.get(nums[i]) > TargetNum) TargetNum = nums[i]; //出現最多
//       if (nums[i] > Target) Target = nums[i]; //最大值
//     }
//     return TargetNum >= Target
//       ? TargetNum * CountNum.get(TargetNum)
//       : Target * CountNum.get(Target);
       
// };
var maxSubarraySumCircular = function (nums) {
    // let Max_Current = nums[0]
    // let Max_Global = nums[0]
    // for(let i =1;i<nums.length - 1;i++){
    //     Max_Current = Math.max(nums[i],Max_Current+nums[i])
    //     if(Max_Current > Max_Global)Max_Global = Max_Current
    // }
    // return Max_Global
    let max = Number.NEGATIVE_INFINITY, min = Number.POSITIVE_INFINITY, 
        Current_1 = 0,Current_2 = 0, total = 0

    for(let i =0;i<nums.length;i++){
        Current_1 += nums[i];
        max = Math.max(Current_1, max);
        Current_1 = Math.max(Current_1, 0);

        Current_2 += nums[i];
        min = Math.min(Current_2, min);
        Current_2 = Math.min(Current_2, 0);

        total += nums[i];
    }
    return total==min?max:Math.max(max,total-(min))
}


console.log(maxSubarraySumCircular([5,-3,5,2,-2,10]))
