/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let Temp = 0
    for(let i = m;i<m+n;i++){
        nums1[m+Temp] = nums2[Temp]
        Temp++
    }
    nums1.sort((a,b)=>{
        return a - b
    })
    console.log(nums1)
};


merge([0],0,[1],1)