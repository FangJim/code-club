class Solution:
    def climbStairs(self, n: int) -> int:
        ans, pre = 1, 1
        for a in range(n-1):
            ans, pre = pre, ans
            ans += pre
        return ans