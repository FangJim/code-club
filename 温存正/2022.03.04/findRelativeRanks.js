/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  let placements = [];
  for (let i = 0; i < score.length; i++) {
    placements.push(score[i]);
  }
  score.sort((a, b) =>b-a);
  for (let i = 0; i < score.length; i++) {
    let tmp = score.indexOf(placements[i]);
    if (tmp === 0) {
      placements[i] = "Gold Medal";
    } else if (tmp === 1) {
      placements[i] = "Silver Medal";
    } else if (tmp === 2) {
      placements[i] = "Bronze Medal";
    } else {
      placements[i] = (++tmp).toString();
    }
  }
  return placements;
};
let score = [5, 4, 3, 2, 1];
console.log(findRelativeRanks(score));
