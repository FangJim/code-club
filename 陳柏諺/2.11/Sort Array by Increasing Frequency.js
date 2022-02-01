/**
 * 1. 先算出這個陣列重複的值有幾個
 * 2. 再用sort去排序
 * @param {number[]} nums
 * @return {number[]}
 */
 const frequencySort = function(nums) {
    const arry=nums.reduce((obj,index)=>{
        if(!obj[index]){
            obj[index]=1;
        }else{
            obj[index]+=1;
        }
        return obj
    },{})
    return nums.sort(function(a, b) {
        if(arry[a]==arry[b]){
            return b-a;
        }else{
            return arry[a]-arry[b];
        }

    });
};