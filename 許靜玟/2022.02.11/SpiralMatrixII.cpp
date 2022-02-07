class Solution {
public:
    vector<vector<int> > generateMatrix(int n) {
        vector<vector<int> > ans(n, vector<int>(n));
        int row= 0;
        int col= 0;
        int rows= n-1;
        int cols= n-1;
        int num = 1;
        int total =n*n;
        while(num <= total)
        {
            for(int index= col; index<= cols; index++) //top
            {
                ans[row][index] = num++;
            }
            row++;
            for(int index= row; index<= rows; index++) //right
            {
                ans[index][cols] = num++;
            }
            cols--;
            for(int index= cols; index>= col; index--) //button
            {
                ans[rows][index] = num++;
            }
            rows--;
            for(int index= cols; index>= row; index--) //left
            {
                ans[index][col] = num++;
            }
            col++;
        }
        return ans;
    }
};