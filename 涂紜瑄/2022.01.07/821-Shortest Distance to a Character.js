/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
 var shortestToChar = function(s, c) {
    let c_pos=[];
    let answer=[];
    let distance;
    let tmp=[];
    let result=0;
    
    for(let i=0; i<s.length; i++){
        if(s[i]==c){
            c_pos.push(i);//紀錄目標字元的位置
        }
    }
    
    for(let i=0; i<s.length; i++){
        for(let j=0; j<c_pos.length; j++){
            distance=Math.abs(i-c_pos[j]);
            tmp.push(distance);
        }
        result=Math.min(...tmp);
        answer.push(result);
        tmp.length=0;
    }
    return answer;
};