/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    let ArrLength = arr.length
    let IsTop = false
    if (ArrLength >= 0 && ArrLength <= 2) return false //不能成山
    if (arr[ArrLength - 1] >= arr[ArrLength - 2] || arr[0] >= arr[1]) return false //尾高 頭高提早去除
        //Faster
    for (let i = 1; i < ArrLength; i++) {
        if (arr[i - 1] == arr[i]) return false;
        if (!IsClimbUp(arr[i - 1], arr[i])) IsTop = true;
        if (IsClimbUp(arr[i - 1], arr[i]) && IsTop === true) return false;
    }
    return true
}

function IsClimbUp(index_1, index_2) {
    if (index_1 < index_2) return true;
    return false;
}

// console.log('F:' + validMountainArray([1, 2, 3, 4, 5, 6, 7, 8, 9])) //false
// console.log('F:' + validMountainArray([9, 8, 7, 6, 5, 4, 3, 2, 1])) //false
// console.log('F:' + validMountainArray([1, 2, 3])) //false
// console.log('F:' + validMountainArray([2, 1])) //false
// console.log('T:' + validMountainArray([1, 2, 3, 2, 1])) //true
// console.log('F:' + validMountainArray([1, 2, 3, 3, 2, 1])) //false
// console.log('T:' + validMountainArray([1, 2, 3, 4, 7, 8, 2, 1])) //true
// console.log("F:" + validMountainArray([3, 7, 6, 4, 3, 0, 1, 0])) //false