/**
 * 1.複製一個陣列比大小
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = nums => {
    let array = [...nums];
    let i = 0;
    let j = 0;
    let count = 0;
    while (i < nums.length) {
        if (nums[i] > array[j]) {
            count++;
            j++;
        } else {
            j++;
        }
        if (j == nums.length) {
            j = 0;
            nums[i] = count;
            count = 0;
            i++;
        }
    }
    return nums
};