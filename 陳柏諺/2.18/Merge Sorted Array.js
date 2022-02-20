/**
 * 1. 題目有說num1=m+n，所以我們可以用num2跑迴圈然後再m+i就會是num1的長度
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function(nums1, m, nums2, n) {
    for (let i = 0; i < nums2.length; i++) {
        nums1[m + i] = nums2[i]
    }
    return nums1.sort((a, b) => a - b)
};