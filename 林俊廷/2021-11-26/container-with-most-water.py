# https://leetcode.com/problems/container-with-most-water/
# class Solution:
from heapq import heappush

def maxArea(self, height: list[int]) -> int:
    start, end = 0, len(height)-1
    max = 0
    while(start < end): #Go through whole array from both side
        hStart = height[start]
        hEnd = height[end]
        deltax = end - start

        if hStart > hEnd:
            if hEnd*deltax > max: 
                max = hEnd*deltax
            end -= 1
        else:
            if hStart*deltax > max: 
                max = hStart*deltax
            start += 1
    return max

# Version 1
# def maxArea(self, height: list[int]) -> int:
#     max = 0
#     hLeigh = len(height)
#     for index in range(0, hLeigh):
#         for ref in range(index+1, hLeigh):
#             if height[index] <= height[ref]:
#                 if height[index] * (ref-index) > max:
#                     max = height[index] * (ref-index)
#             else:
#                 if height[ref] * (ref-index) > max:
#                     max = height[ref] * (ref-index)
#     return max

print(maxArea(0, [1,8,6,2,5,4,8,3,7]))
