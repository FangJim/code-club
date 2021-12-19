/**
 * @param {number[]} nums
 * @return {number[]}
 */
let smallerNumbersThanCurrent = (nums) => {
    let originalArr = [...nums];
    let sortedArr = nums.sort((a, b) => a - b) //小到大 O(nlogn)
    let ansArr = [];
    let length = sortedArr.length;
    let map = new Map();
    //set map
    for (let i = 0; i < length; i++) {// O(n)
        if (!map.has(sortedArr[i])) {
            map.set(sortedArr[i], i)
        }
    }
    //output ans
    for (let i = 0; i < length; i++) {// O(n)
        ansArr.push(map.get(originalArr[i]))
    }
    return ansArr
};

smallerNumbersThanCurrent([8, 1, 2, 2, 3]);