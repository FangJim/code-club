/**
 * https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/
 * @param {number[]} arr
 * @return {number[]}
 */
 var replaceElements = function(arr) {
    let len = arr.length;
    let max = arr[len-1]; //將max值設定為最後一位
    let tmp = 0;
    arr[len-1] = -1; //最後一位給值-1
    for(let i=len-2; i>=0; i--){
        tmp = arr[i]; //暫存紀錄當前arr[i]的值
        arr[i] = max; //將arr[i]更新為max值
        max = Math.max(tmp,max); //比較並更新max值
    }
    return arr;
};

console.log(replaceElements([17,18,5,4,6,1]));  //[ 18, 6, 6, 6, 1, -1 ]
console.log(replaceElements([400]));  //[ -1 ]