/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var smallerNumbersThanCurrent = function(nums) {
    let num=nums.length;
    let count=0;
    let result=[];
    for(let i=0;i<num;i++){
        for(let j=0;j<num;j++){
            if(nums[j]<nums[i]){count++;}
        }
        result.push(count);
        count=0;
    }
    return result;
};