/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
    ArrLength = arr.length
    let curMax = arr[ArrLength - 1]
    let tempMax = arr[ArrLength - 1]
    for(let i = arr.length - 2; i >= 0;i--){
        if(arr[i]>curMax){
            tempMax = arr[i]
            arr[i] = curMax
            curMax = tempMax
        }else{
            arr[i] = curMax
        }
    }
    arr[ArrLength - 1] = -1;
    return arr

};
console.log(replaceElements([400]))
//陣列每一個數都要變成該數右邊最大的值
//若是最後一位則變為-1
//[10,10,10,10,10,3,3,2,-1]
//由後往前找 DP