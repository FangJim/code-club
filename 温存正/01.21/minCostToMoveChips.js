/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function (position) {
  let cost1 = 0;
  let cost2 = 0;
  for (let i = 0; i < position.length; i++) {
    if (position[i] % 2 == 0) {
      cost1++;
    } else {
      cost2++;
    }
  }
  console.log(Math.min(cost1, cost2));
  //return Math.min(cost1, cost2);
};
let position = [1, 1000000000];
minCostToMoveChips(position);
