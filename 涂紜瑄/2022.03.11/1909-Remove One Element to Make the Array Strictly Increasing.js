/**
 * https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/
 * @param {number[]} nums
 * @return {boolean}
 */
 var canBeIncreasing = function(nums) {
    let arr;
    let isIncreasing = true;
    for(let i = 0; i < nums.length; i++){
        isIncreasing = true;
        arr = (nums.slice(0,i)).concat(nums.slice(i+1));
        console.log(arr);
        for(let i = nums.length-1; i>0; i--){
            if(arr[i] - arr[i-1] <= 0) { isIncreasing = false };
        }
        if(isIncreasing) {return true};
    }
    return false;
};

console.log(canBeIncreasing([1,2,10,5,7])); //true
console.log(canBeIncreasing([2,3,1,2]));    //false