/**
 * @param {number[]} nums
 * @return {number}
 */

 var rob = function(nums) {
    let number=0;//
    let num=0;//總和
    if(nums.length==1) return nums[0]
    if(nums.length==2) return Math.max(nums[0],nums[1]);
    nums[1]=Math.max(nums[0],nums[1]);
    for(let i=2;i<nums.length;i++){
        nums[i]=Math.max(nums[i]+nums[i-2],nums[i-1])
    }
    return nums[nums.length-1]
};
console.log(rob([2,7,9,3,1]))
// [2,1,1,2]   2＋2=4
//[2,7,9,3,1]  從第二位開始判斷該偷哪一間 第一輪 9+2>7 最大11＋1
//先計算選擇該間當下最大的金額
//再去比對
//最大金額   = Max(現在金額+前前一棟最大金額 ， 前一棟最大金額)