/**
 * https://leetcode.com/problems/valid-mountain-array/submissions/
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    if(arr.length>=3){
        let Max=Math.max(...arr);
        //判斷最大值是否只有一個
        let count=0;
        for(let i=0;i<arr.length;i++){
            if(arr[i]==Max) count++;
        }
        if(count>1){return false}
        //判斷最大值是否在第一位或是最後一位
        let MaxIndex=arr.indexOf(Max);
        if(MaxIndex==0 || MaxIndex==arr.length-1){return false;}
        //判斷是否為嚴格遞增
        if(MaxIndex!=1){
            for(let i=MaxIndex;i>0;i--){
                if(arr[i]-arr[i-1]<=0){return false;}
            }
        }
        //判斷是否為嚴格遞減
        if(MaxIndex!=arr.length-2){
            for(let i=MaxIndex;i<arr.length-1;i++){
                if(arr[i+1]-arr[i]>=0){return false;}
            }
        }
    }
    else{return false;}
    
    return true;
};

console.log(validMountainArray([0,2,3,5,2,1,0]));
console.log(validMountainArray([1,7,9,5,4,1,2]));