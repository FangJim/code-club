/**
 * https://leetcode.com/problems/merge-sorted-array/
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    // let nums = nums1.concat(nums2);
    
    nums1.splice(m, n);
    for (let i = 0; i < n; i++) {
        nums1.push(nums2[i]);
    }
    nums1.sort(function(a, b) {
        return a - b;
    });
    
    return nums1;
};

console.log(merge([1,2,3,0,0,0],3,[2,5,6],3));  //[ 1, 2, 2, 3, 5, 6 ]