/**
 * 1.用二分搜尋法找answer
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let [start, end] = [0, arr.length - 1]
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid + 1] > arr[mid] && arr[mid] > arr[mid - 1]) {
            start = mid;
        } else if (arr[mid - 1] > arr[mid] && arr[mid + 1] < arr[mid]) {
            end = mid;
        } else {
            return mid
        }
    }
};