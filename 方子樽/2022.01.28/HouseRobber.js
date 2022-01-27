/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function (nums) {
    let n = nums.length;
    if(n===1) return nums[0]

    let dp_cost = new Array(3)
    //dp_cost[0] -> the first two
    //dp_cost[1] -> next door
    //dp_cost[2] -> temp(the higher cost this index)
    dp_cost[0] = nums[0];
    dp_cost[1] = Math.max(nums[0], nums[1]);
    dp_cost[2] = dp_cost[1];

    for (let i = 2; i < n; i++) {
        dp_cost[2] = Math.max(dp_cost[1],dp_cost[0]+nums[i]);
        dp_cost[0] = dp_cost[1];
        dp_cost[1] = dp_cost[2];
    }
    return dp_cost[2];
};