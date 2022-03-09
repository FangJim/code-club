class Solution:
    def decodeAtIndex(self, s: str, k: int) -> str:
        idx, ans = 0, ""
        for a in range(len(s)):
            if idx >= k: return ans[k-1]

            if s[a].isdigit():
                idx *= int(s[a])
                ans *= int(s[a])
            else:
                idx += 1
                ans += s[a]
        return ans[k-1]

# class Solution:
#     def decodeAtIndex(self, S, K):   
#         A = [1]
#         for x in S[1:]:
#             if A[-1] >= K : break

#             if x.isdigit():
#                 A.append( A[-1]*int(x) )
#             else:
#                 A.append( A[-1]+1 )
        
#         for i in reversed(range(len(A))):
#             K %= A[i]
#             if not K and S[i].isalpha():
#                 return S[i]