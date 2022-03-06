/**    
 * @param {number[]} score
 * @return {string[]}
 */

 var findRelativeRanks = function(score) {
    let ans = new Array(score.length);
    for(let i=0;i<score.length;i++){
       ans[i]=score[i]
    }
    ans.sort(function(a,b){
        return b-a
    })
    for(let i=0;i<score.length;i++){
        for(let j=0;j<score.length;j++){
            if(score[i]===ans[j]){
                if(j==0)
                    score[i]="Gold Medal"
                else if(j==1)
                    score[i]="Silver Medal"
                else if(j==2)
                    score[i]="Bronze Medal"
                else
                    score[i]=(j+1).toString()
            }
        }
    }
    return score
};