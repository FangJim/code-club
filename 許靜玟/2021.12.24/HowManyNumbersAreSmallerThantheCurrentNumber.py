class Solution:
    def smallerNumbersThanCurrent(self, nums: List[int]) -> List[int]:
        return [len(list(filter(lambda x: a > x, nums))) for a in nums]

#return [ sorted(nums).index(i) for i in nums ]