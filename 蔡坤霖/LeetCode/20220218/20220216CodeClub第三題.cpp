#include <iostream>
#include<vector>
#define SIZE 8
using namespace std;

int partition(int number[], int left, int right) {//最後一筆當pivot
	int i = left - 1;
	for (int j = left; j < right; j++) {
		if (number[j] <= number[right]) {
			i++;
			swap(number[i], number[j]);
		}
	}

	swap(number[i + 1], number[right]);
	return i + 1;
}

void quickSort(int number[], int left, int right) {
	if (left < right) {
		int q = partition(number, left, right);
		quickSort(number, left, q - 1);
		quickSort(number, q + 1, right);
	}
}
void swap(int a, int b) {
	int temp = a;
	a = b;
	b = temp;
}
int main()
{
	int example[] ={ 1,2,5,3,10,2,6,11 };
	quickSort(example, 0, SIZE-1);
	for (int i = 0; i < SIZE; i++) {
		cout << example[i] << ",";
	}
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
