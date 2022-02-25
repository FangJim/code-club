/**
 * @description
 * pk 頭、尾、中間找
 * Ex:3,2,4,5,1
 * pk找3
 * i,j從2,1開始向中間找
 * i都要小於3
 * j都要大於3
 * 第一次 2 , 1  都小於3
 * 第二次 j停 i繼續找到4 大於3
 * i , j互換
 * 現況:3,2,1,5,4
 * 第三次 i找到5 j找到1 i > j 停止 i與pk互換
 * 結果:1,2,3,5,4
 * 
 * @param {number}
 * @param {Array}
 */

function quicksort(num){
    const NumsLength = num.length
    if(NumsLength == 1)return num

    pk = num[0]
    left = 1
    right = NumsLength - 1

    for(i=1;i<NumsLength-1;i++){
        
    }
}

quicksort([1,3,4,2,5])