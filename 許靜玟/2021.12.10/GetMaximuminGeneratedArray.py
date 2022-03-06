class Solution:
    def getMaximumGenerated(self, n: int) -> int:
        if n <= 1: return n
        nums = [0, 1]
        index = (n//2)+1

        for i in range(1, index):
            nums.append(nums[i])
            if len(nums) == n+1: return max(nums)
            nums.append(nums[i] + nums[i+1])
        return max(nums)