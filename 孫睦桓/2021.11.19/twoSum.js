var twoSum = function(nums, target) {
    let length = nums.length;
    for (var i = 0; i < length; i++) {
        for (var j = i + 1; j < length; j++) {
            let combine = nums[i] + nums[j];
            if (combine == target) {
                let ans = [i, j];
                //let ans = '[' + nums(i) + ',' + nums(j) + ']';
                return ans;
            }

        }
    }

};
// console.log(twoSum([3, 2, 4], 5));
// console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([2, 5, 5, 11], 10));