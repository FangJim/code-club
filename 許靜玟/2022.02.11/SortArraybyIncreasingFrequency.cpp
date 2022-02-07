class Solution {
public:
    vector<int> frequencySort(vector<int>& nums) {
        map<int, int, greater<int>> count;
        multimap<int, int> mmp;
        vector<int> ans;
        for(auto a: nums) count[a]++;
        for(auto a: count) mmp.insert({a.second, a.first});
        
        for(auto a: mmp)
        {
            for(int i=1; i<=a.first; i++)
                ans.push_back(a.second);
        }
        return ans;
    }
};