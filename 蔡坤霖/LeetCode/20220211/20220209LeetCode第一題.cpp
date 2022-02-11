#include <iostream>
#include <vector>
#include<map>
#include<math.h>
using namespace std;
class Solution {
public:
	vector<vector<int>> generateMatrix(int n) {

		int left = 0, right = n - 1, top = 0, bottom = n - 1;
		int num = 1, total = n * n;
		vector<vector<int>>ans(n, vector<int>(n));
			
		while (num<=total) {
			// left -> right
			for (int i = left; i < right; i++) {
				ans[top][i] = num++;
			}
			
			// top -> bottom
			for (int i = top; i < bottom; i++) {
				ans[i][right] = num++;
			}
			
			// right -> left
			for (int i = right; i > left; i--) {
				ans[bottom][i] = num++;
			}

			// bottom -> top
			for (int i = bottom; i > top; i--) {
				ans[i][left] = num++;
			}


			left++;
			right--;
			top++;
			bottom--;
		}
		if (n % 2 == 1) {
			double center = n/2;
			ans[center][center] = num;
		}
		return ans;
	}
};
int main()
{
	int n = 3;
	Solution s;
	s.generateMatrix(n);
	return 0;
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
