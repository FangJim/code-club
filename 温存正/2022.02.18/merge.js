/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let j = 0;
  let nl = nums1.length;
  nums1.splice(m, nl - m);
  for (let i = 0; i < m; i++) {
    if (nums2[j] <= nums1[i]) {
      nums1.splice(i, 0, nums2[j]);
      j++;
    }
  }
  if (j !== n) {
    for (let i = j; i < n; i++) {
      nums1.push(nums2[i]);
    }
  }
  nums1.sort((a, b) => {
    if (a < b) return 1;
    return -1;
  });
  return nums1;
};
let nums1 = [4, 0, 0, 0, 0, 0],
  m = 1,
  nums2 = [1, 2, 3, 5, 6],
  n = 5;
console.log(merge(nums1, m, nums2, n));
