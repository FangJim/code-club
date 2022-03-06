/**
 *
 * @param input {array[]}
 * @param ouput {array[]}
 */

const Consecutive = [1, 1, 4, 5,1,4];
const N = 6;
const K = 3;

//@param (array,day)
var Shoffee = function(N,K,Consecutive){
    let Ans = 0
    let current = 0
    let ContentsNum = 1
    for(let i = 0; i<N ; i++){
        current = Consecutive[i]// 1 
        if(Consecutive[i] >= K)Ans++
        while(ContentsNum+i<N){ // 1 2
        current += Consecutive[ContentsNum+i]
        if(current / (ContentsNum + 1) >= K){ //1 3
            Ans++ //1
        }
        ContentsNum++
        }
        ContentsNum = 1
    }
    return Ans;
}

console.log(Shoffee(N,K,Consecutive))