class Solution(object):
    def canBeIncreasing(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        count=0
        for i in range(1,len(nums)):
            if nums[i-1]>=nums[i]:
                count+=1
                if i>1 and nums[i-2]>=nums[i]:
                    nums[i]=nums[i-1]
        return count<2