/**
 * @param {number[]} arr
 * @return {boolean}
 */
const validMountainArray = function (arr) {
    let isIncreasing, isDecreasing = false;
    let changeTimes = 0

    if (arr.length < 3) return false;

    for (let i = 0; i < arr.length; i++) {
        if (changeTimes > 1) return false;

        if (arr[i] < arr[i + 1]) {
            if (isDecreasing) changeTimes++;
            isIncreasing = true;
            isDecreasing = false;
        }
        else if (arr[i] > arr[i + 1]) {
            if (isIncreasing) changeTimes++;
            isDecreasing = true;
            isIncreasing = false;
        }
        else if (arr[i] === arr[i + 1]) {
            return false
        }
    }
    //last one must be isDecreasing
    return (changeTimes === 0) ? false : isDecreasing
}