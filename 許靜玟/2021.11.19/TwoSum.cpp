/******************************************************************************
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
******************************************************************************/
class Solution { //20220124
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        vector<int> ans;
        vector<int>::iterator result;
        int index = 0;
        for(auto a : nums)
        {
            result = find(nums.begin() + index + 1 , nums.end(), target - a);
            if(result == nums.end()) index++;
            else 
            {
                ans.push_back(index);
                ans.push_back(distance(nums.begin(), result));
                break;
            }
        }
        return ans;
    }
};