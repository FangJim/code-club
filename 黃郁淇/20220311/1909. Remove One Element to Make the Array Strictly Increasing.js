/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canBeIncreasing = function(nums) {
    let count =nums.length-2;//佔存值
    let number=0;//第幾位
    let time=0;
    for(let i=0;i<nums.length;i++)
    {
        ans=nums.splice(number,1);
        console.log(nums);
        for(let j=0;j<nums.length-1;j++){
            if(nums[j]>=nums[j+1])
                break;
            else
                time++
        }
        if(time==count)
            return true;
        time=0;
        a=nums.splice(number,0,ans[0])
        console.log(nums);
        number++
        ans=0;
    }
    return false
};

console.log(canBeIncreasing([2,3,1,2]))