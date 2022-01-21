//assume all chips in index 0 or 1 (cost 0, odd to 0, even to 1)
//just see index 0 and 1 which has more chips  
let minCostToMoveChips = (position) => {
    let even = 0, odd = 0;
    for (let i = 0; i < position.length; i++) {
        (position[i] % 2) ? even++ : odd++;
    }
    return Math.min(odd, even)
};
console.log(minCostToMoveChips([1, 2, 3]));
