/**
 * 1. use one map to store value and rank,one array sort b-a
 * 2. compare index of values
 * @param {number[]} score
 * @return {string[]}
 */
const findRelativeRanks = function(score) {
    let mapScore = new Map();
    for (let i = 0; i < score.length; i++) {
        mapScore.set(score[i])
    }
    let heapScore = [...score].sort((a, b) => b - a);
    for (let i = 0; i < heapScore.length; i++) {
        if (i === 0 && mapScore.has(heapScore[i])) {
            mapScore.set(heapScore[i], "Gold Medal")
        } else if (i === 1 && mapScore.has(heapScore[i])) {
            mapScore.set(heapScore[i], "Silver Medal")
        } else if (i === 2 && mapScore.has(heapScore[i])) {
            mapScore.set(heapScore[i], "Bronze Medal")
        } else {
            mapScore.set(heapScore[i], String(i + 1))
        }
    }
    return Array.from(mapScore.values())
};
console.log(findRelativeRanks([5, 4, 3, 2, 1]))