#include <iostream>
#include<vector>
#include<algorithm>
using namespace std;
class Solution {
private:
	int alphabet[26] = { 0 };
	int common[26] = { 0 };
	vector<string>ans;
public:
	vector<string> commonChars(vector<string>& words) {
		for (int i = 0; i < 26; i++)
			common[i] = INT_MAX;
		for (int i = 0; i < words.size(); i++) {
			for (int j = 0; j < words[i].length(); j++) {
				alphabet[words[i][j] - 'a']++;
			}
			for (int k = 0; k < 26; k++) {
				common[k] = min(common[k], alphabet[k]);
				alphabet[k] = 0;
			}
		}
		for (int i = 0; i < 26; i++) {
			while (common[i]--)
			{
				ans.push_back(string(1, i + 'a'));
			}
		}
		return ans;
	}
};
int main()
{
    std::cout << "Hello World!\n";
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
