/**
 * 
 * @param input {array[]}
 * @param ouput {array[]}
 */

const cell = [-9,-8,1,2,3]
const day = 1

//@param (array,day)
var BestHealthForOneDay = function(cell,day){
    let CellLength = cell.length
    let curMax = 0
    let tempMax = 0
    for(let i =0;i<CellLength;i++){
        tempMax += cell[i]
        if(tempMax >= curMax)curMax = tempMax
    }
    return curMax
}


var BestHealthForMuitDay = function(cell,day){
    
}

console.log(BestHealthForOneDay(cell,day))