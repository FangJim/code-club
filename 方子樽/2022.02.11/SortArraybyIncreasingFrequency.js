/**
 * @param {number[]} nums
 * @return {number[]}
 */
const frequencySort = function (nums) {
    let map = new Map();
    nums.forEach((num) => {
        map.set(num, map.get(num) + 1 || 1);
    });

    return nums.sort((a, b) =>
        map.get(a) === map.get(b) ? b - a : map.get(a) - map.get(b)
    );
};
frequencySort([1, 1, 2, 2, 2, 3])