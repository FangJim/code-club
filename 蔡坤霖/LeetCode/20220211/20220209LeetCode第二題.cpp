#include <iostream>
#include <vector>
#include<map>
#include<unordered_map>
#include<algorithm>
using namespace std;
class Solution {
public:
	bool static compare(pair<int, int> a, pair<int, int> b)
	{
		if (a.second == b.second)
			return a > b;
		else
			return a.second < b.second;
	}
	vector<int> frequencySort(vector<int>& nums) {
		unordered_map<int, int> record;
		vector<pair<int, int> >vec;
		vector<int> ans;
		for (auto a : nums) record[a]++;
		for (auto a : record) vec.push_back(a);
		sort(vec.begin(), vec.end(), compare);
		for (int i = 0; i < vec.size(); i++)
		{
			while (vec[i].second > 0)
			{
				ans.push_back(vec[i].first);
				vec[i].second--;
			}
		}
		return ans;
	}
};
int main()
{
	vector<int>nums{ 1, 1, 2, 2, 2, 3 }; // [3, 1, 1, 2, 2, 2]
	Solution s;
	s.frequencySort(nums);
}

// 執行程式: Ctrl + F5 或 [偵錯] > [啟動但不偵錯] 功能表
// 偵錯程式: F5 或 [偵錯] > [啟動偵錯] 功能表

// 開始使用的提示: 
//   1. 使用 [方案總管] 視窗，新增/管理檔案
//   2. 使用 [Team Explorer] 視窗，連線到原始檔控制
//   3. 使用 [輸出] 視窗，參閱組建輸出與其他訊息
//   4. 使用 [錯誤清單] 視窗，檢視錯誤
//   5. 前往 [專案] > [新增項目]，建立新的程式碼檔案，或是前往 [專案] > [新增現有項目]，將現有程式碼檔案新增至專案
//   6. 之後要再次開啟此專案時，請前往 [檔案] > [開啟] > [專案]，然後選取 .sln 檔案
