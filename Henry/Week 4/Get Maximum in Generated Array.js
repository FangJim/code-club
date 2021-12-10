/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function (n) {
  let Temp = new Array(n).fill(null);
  if (n === 0) return 0;
  if (n === 1) return 1;
  Temp[0] = 0;
  Temp[1] = 1;
  for (let i = 2; i <= n; i++) {
    if (i % 2 === 0) Temp[i] = Temp[i / 2];
    else {
      Temp[i] = Temp[Math.floor(i / 2)] + Temp[Math.floor(i / 2) + 1];
    }
  }
  return Math.max(...Temp)
};
let n = 3
console.log(getMaximumGenerated(n))

