/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
//a~z的編碼為97~122
var decodeAtIndex = function(s, k) {
    let str = "";
    let tmp = "";
    for(let i=0; i<s.length; i++){
        if(s.charCodeAt(i)>96 && s.charCodeAt(i)<123){  
            //如果是字母
            str+=s[i];
        }
        else if(s[i]>0 && s[i]<=9){   
            //如果是數字
            tmp = str;
            str += tmp.repeat(s[i]-1);
        }
        
        if(str.length>k){
            return str[k-1];
        }
    }
    // return tmp;
    // return str;
    return str[k-1];
};