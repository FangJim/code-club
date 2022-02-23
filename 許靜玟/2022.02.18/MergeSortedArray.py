class Solution(object):
    def merge(self, nums1, m, nums2, n):
        for a in range(0, n): 
            nums1.pop()
        for a in range(0, n): 
            nums1.append(nums2[a])
        nums1.sort()