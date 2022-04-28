/**
 * https://leetcode.com/problems/find-all-anagrams-in-a-string/
 * https://hackmd.io/@kenjin/BkO3caEGH
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
 var findAnagrams = function(s, p) {
    let record = new Map(); // (letter, count)
    let res=[];
    for(let i=0;i<p.length;i++){
        let letter = p[i];
        record[letter] = record[letter] + 1 || 1
    }
    // return record;

    if(s.length<p.length) return [];

    for(let i=0; i<s.length; i++){
        if(i>=p.length){
            
        }
    }

    return res;

};

console.log(findAnagrams("cbaebabacd","abc"));