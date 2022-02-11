/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    let Opt = Array.from(Array(n),()=>Array(n))
    let top = 0
    let bottom = n-1
    let left = 0
    let right = n-1
    let i,k,dir
    k = 1
    dir = 0


    while(top<=bottom&&left<=right){
        if (dir === 0) {            // left to right
            for (i = left; i <= right; i++) {
                Opt[top][i] = k++;
            }
            top++;
        } else if (dir === 1) {     // top to bottom
            for (i = top; i <= bottom; i++) {
                Opt[i][right] = k++;
            }
            right--;
        } else if (dir === 2) {     // right to left
            for (i = right; i >= left; i--) {
                Opt[bottom][i] = k++;
            }
            bottom--;
        } else if (dir === 3) {     // bottom to top
            for (i = bottom; i >= top; i--) {
                Opt[i][left] = k++;
            }
            left++;
        }

        dir = (dir + 1) % 4;
    }

    return Opt
};

let n = 3
console.table(generateMatrix(n))
//give "n" return "n*n"
//n = 1
// 1
//n = 2
// 1 2
// 4 3
//n = 3 = 3 + 2*2 + 1
// 1 2 3
// 8 9 4
// 7 6 5
//n = 4   
// 1   2   3  4
//12  13  14  5
//11  16  15  6
//10   9   8  7
// n = 5   5 + 4*2 + 3
// 1  2  3  4  5
// 16 17 18 19 6
// 15 24 25 20 7
// 14 23 22 21 8
// 13 12 11 10 9
