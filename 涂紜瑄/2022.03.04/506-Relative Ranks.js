/**
 * https://leetcode.com/problems/relative-ranks/
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let arr=[...score];
    arr.sort((a,b)=>(b-a));
    // return arr;
    for(let i=0;i<arr.length;i++){
        if(score[i]==arr[0]){
            score[i]="Gold Medal";
        }
        else if(score[i]==arr[1]){
            score[i]="Silver Medal";
        }
        else if(score[i]==arr[2]){
            score[i]="Bronze Medal";
        }
        else{
            score[i]=(arr.indexOf(score[i])+1).toString();
        }
    }
    return score;
};

console.log(findRelativeRanks([5,4,3,2,1]));    //["Gold Medal","Silver Medal","Bronze Medal","4","5"]
console.log(findRelativeRanks([10,3,8,9,4]));   //["Gold Medal","5","Bronze Medal","Silver Medal","4"]