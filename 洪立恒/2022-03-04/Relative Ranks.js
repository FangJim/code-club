/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
    const ScoreLength = score.length
    //let Ans = Array.from(score)
    let Ans = [...score]
    Ans.sort((a,b)=>{return b-a})
    for(let i in Ans){
        if(score[i]==Ans[0]){
            score[i] = 'Gold Medal'
        }else if(score[i]==Ans[1]){
            score[i] = 'Silver Medal'
        }else if(score[i]==Ans[2]){
            score[i] = 'Bronze Medal'
        }else{
            score[i] = Ans.indexOf(score[i]) + 1 + ""
        }
    }

    return score
};


let score = [2,30,3,1,5]
console.log('Ans',findRelativeRanks(score))