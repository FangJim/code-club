/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  if (n === 1) {
    return [[1]];
  }
  let arrAns = new Array(n);
  for (let i = 0; i < n; i++) {
    arrAns[i] = new Array(n);
  }
  let printCount = n - 1;
  let row = 0;
  let cloumn = 0;
  let number = 1;
  for (let i = 0; i < n / 2; i++) {
    for (let j = 0; j < printCount; j++) {
      arrAns[row][cloumn++] = number++;
    }
    for (let j = 0; j < printCount; j++) {
      arrAns[row++][cloumn] = number++;
    }
    for (let j = 0; j < printCount; j++) {
      arrAns[row][cloumn--] = number++;
    }
    for (let j = 0; j < printCount; j++) {
      arrAns[row--][cloumn] = number++;
    }
    row++;
    cloumn++;
    printCount -= 2;
  }
  if (n % 2) {
    arrAns[parseInt(n / 2)][parseInt(n / 2)] = number;
  }
  return arrAns;
};
let n = 5;
console.log(generateMatrix(n));
//右轉：牆壁or原方向沒路，回傳該點的index值判斷是要i++之類的
