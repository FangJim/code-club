/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    let SLength = s.length
    let STemp = s.split('')
    let Opt = new Array(SLength).fill(null)
    let EMark = 0

    //O(n^logN)
    for (let i = 0; i < SLength; i++) { //Opt[i]
        for (let j = i; j < SLength; j++) {
            if (STemp[j] == c) {
                if (j - i > i - EMark && EMark < i) {
                    Opt[i] = i - EMark
                    break
                }
                Opt[i] = j - i
                EMark = j
                break
            } else if (j == SLength - 1) Opt[i] = i - EMark
        }
    }
    return Opt
};

//標記e位置
//找最近的e
let s = "loveleetcode"
let c = 'e'
console.log(shortestToChar(s, c))