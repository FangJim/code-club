/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    for(let i = 0;i<n;i++){
        nums1[m+i] = nums2[n]
    }
    nums1.sort((a,b)=>{
        return a - b
    })
    console.log(nums1)
};


merge([2,5,6,0,0,0],3,[1,2,3],3)