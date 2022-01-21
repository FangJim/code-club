/**
 * https://leetcode.com/problems/find-common-characters/
 * @param {string[]} words
 * @return {string[]}
 */

//--------------------error----------------------
 var commonChars = function(words) {
    let array=words[0].split(''); //紀錄第一個字串的字元有哪些
    let tmpArray=[];
    let resultArray=[];
     
    for(let i=0; i<words.length; i++){
        tmpArray=words[i].split('');
        
        var newArray = array.map(function(val,index){
            if(tmpArray.includes(val)){
                resultArray.push(val);
                array.splice(index,1,"");
                return val;
            }
            // return tmpArray.includes(val);
        });
        
        array=resultArray;
        resultArray=[];
    }
    return array;
};


//-------------------error-------------------------
 var commonChars = function(words) {
    let array=words[0].split(''); //紀錄第一個字串的字元有哪些
    let tmpArray=[];
    let res;
     
    for(let i=0; i<words.length; i++){
        tmpArray=words[i].split('');
        
        var newArray = array.filter(function(val,index){
            return tmpArray.includes(val);
        });
        array=newArray;
    }
    return newArray;
};