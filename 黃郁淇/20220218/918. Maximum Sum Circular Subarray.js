
/**
 * @param {number[]} nums
 * @return {number}
 */
/*
 var maxSubarraySumCircular = function(nums) {
    var Plustime=[]
    var time=[]
    
    nums.forEach(function(i){
        if(i>0){
            if(Plustime[i]==undefined)
                Plustime[i]=1
            else
                Plustime[i]++
        }
        else{
            if(time[-i]==undefined)
                time[-i]=1
            else
                time[-i]++
        }
    })
    console.log(time)
    nums.sort(function(a,b){
            return b-a
        })
    console.log(nums)
    if(Plustime.length==0)
    {
        return (nums[0]*time[-nums[0]])
    }else{
        return nums[0]*Plustime[nums[0]]
    }
};
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubarraySumCircular = function(nums) {
    var max=nums[0]
    var a=nums[0]
    var total=0
    for(let i=1;i<nums.length;i++){//按照數列找出不循環最大子集合
        a=nums[i]+Math.max(0, a)
        if(a>max)
            max=a
    }
    a=0
    for(let i=0;i<nums.length;i++)//算總數
    {
        total+=nums[i]
        nums[i]=-nums[i]
    }
    console.log(nums)
    var max1=nums[0]
    for(let i=1;i<nums.length;i++){//最小子集合
        a=nums[i]+Math.max(0, a)
        if(a>max1)
            max1=a
    }
    console.log(max)
    console.log(max1)
    console.log(total)
    if(max<0)
        return max
    else
        return Math.max(max,total-(-max1))//最大值(不循環最大值,循環最大值)，循環最大值=全部-最小子集合,
        
    
};
console.log(maxSubarraySumCircular([-3,-1,-2,-1]))
