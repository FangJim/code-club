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
      Temp[i] = Temp[i/2] + Temp[Math.floor(i/2) + 1];
    }
  }
  return Math.max(...Temp)
}
var getMaximumGenerated = function (n) {
  let Temp = new Array(n).fill(null);
  for (let i = 0; i <= n; i++) {
    if(i===0||i===1){
      Temp[i] = i
    }
    else if (i % 2 === 0) Temp[i] = Temp[i / 2];
    else if(i %2 === 1) Temp[i] = Temp[(i-1) / 2] + Temp[(i+2)/2];
  }
  return Math.max(...Temp);
};


