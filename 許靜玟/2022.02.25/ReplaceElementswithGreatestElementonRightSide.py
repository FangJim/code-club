class Solution:
    def replaceElements(self, arr: List[int]) -> List[int]:
        ans = []
        while arr:
            del arr[0]
            if arr: ans.append(max(arr))
            else: ans.append(-1)
        return ans

        # curMax = -1
        # for i in range(len(arr)-1, -1, -1):
        #     print(i, curMax)
        #     arr[i], curMax = curMax, max(arr[i], curMax)
        #     print("max=", curMax)
        # return arr