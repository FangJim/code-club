"use strict";

/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function findRelativeRanks(score) {
  var placements = [];

  for (var i = 0; i < score.length; i++) {
    placements.push(score[i]);
  }

  score.sort(function (a, b) {
    if (a < b) return 1;
    return -1;
  });

  for (var _i = 0; _i < score.length; _i++) {
    var tmp = score.indexOf(placements[_i]);

    if (tmp === 0) {
      placements[_i] = "Gold Medal";
    } else if (tmp === 1) {
      placements[_i] = "Silver Medal";
    } else if (tmp === 2) {
      placements[_i] = "Bronze Medal";
    } else {
      placements[_i] = (++tmp).toString();
    }
  }

  return placements;
};

var score = [5, 4, 3, 2, 1];
console.log(findRelativeRanks(score));