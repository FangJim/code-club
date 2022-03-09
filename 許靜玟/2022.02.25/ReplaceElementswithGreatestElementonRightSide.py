class Solution:
    def replaceElements(self, arr: List[int]) -> List[int]:
        ans = []
        while arr:
            del arr[0]
            if arr: ans.append(max(arr))
            else: ans.append(-1)
        return ans