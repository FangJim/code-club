/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var smallerNumbersThanCurrent = function(nums) {
    let l=nums.length;
    let tmp=[];
    for (let i = 0; i < l; i++) {
        tmp[i]=nums[i];
    }
    nums.sort((a,b)=>{
        if(a>b){return 1};
        if(a<b){return -1};
        return 0;
    });
    for (let i = 0; i < l; i++) {
        tmp[i]=nums.indexOf(tmp[i]);
    }
    console.log(tmp);
    console.log(nums);
    //return tmp;
};
let nums = [5,0,10,0,10,6];
smallerNumbersThanCurrent(nums);

