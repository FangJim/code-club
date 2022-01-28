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
/*
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        vector<int> ans;
        int index = 0;
        for(auto a : nums) 
        {
            for(int i = index; i < nums.size()-1; i++)
            {
                if(a + nums[i+1] == target) 
                {
                    ans.push_back(index);
                    ans.push_back(i+1);
                    break;
                }
            }
            index++;
        }
        return ans;
    }
};
*/
/*
#include <iostream> //2022.0116
#include <vector>
using namespace std;

int main()
{
    vector<int> nums; //動態陣列用於儲存使用者輸入的數字陣列
    int index; //輸入想儲存的陣列長度
    cin >> index;
    while(index != 0)
    {
        int x;
        cin >> x;
        nums.push_back(x); //依序輸入陣列內數字並存入nums
        index--;
    }
    int target;
    cin >> target; //欲尋找的數字總和target
    for(auto a : nums) // if nums = [1, 2, 3], target = 4
    {
        for(int i = index; i < nums.size()-1; i++) //nums[index] + nums[index+1] (1 + 2) and nums[index] + nums[index+2] (1 + 3)
        {
            if(a + nums[i+1] == target) 
            {
                cout << target << " = index " << index << " + index " << i+1 ;
                break;
            }
        }
        index++; //index 表示a in nums的位置
    }
}
*/