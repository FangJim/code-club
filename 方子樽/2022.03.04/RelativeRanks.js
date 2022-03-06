/**
 * @param {number[]} score
 * @return {string[]}
 */
const findRelativeRanks = (score) => {
  const medal = ["Gold Medal", "Silver Medal", "Bronze Medal"];
  const map = new Map();
  const originalScore = [...score];
  score.sort((a, b) => b - a);
  for (let i = 0; i < score.length; i++) {
    i < 3 ? map.set(score[i], medal[i]) : map.set(score[i], String(i + 1));
  }
  for (let i = 0; i < originalScore.length; i++) {
    originalScore[i] = map.get(originalScore[i]);
  }
  return originalScore;
};

console.log(findRelativeRanks([10, 3, 8, 9, 4]));
