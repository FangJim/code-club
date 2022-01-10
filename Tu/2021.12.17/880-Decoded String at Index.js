/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
//a~z的編碼為97~122
var decodeAtIndex = function(s, k) {
    
    let size = 0;       //紀錄字串長度
    let breakPoint = k; //紀錄暫停點
    
    for(let i=0; i<s.length; i++){
        if(s.charCodeAt(i)>96 && s.charCodeAt(i)<123){  //如果是小寫字母
            size++;
        }
        else if(s[i]>'0' && s[i]<='9'){   //如果是數字
            size *= s[i];
        }
        //當字串長度大於k值(index)時中斷紀錄字串
        if(size>=k){   
            breakPoint = i;   //找到中斷點
            break;
        }
    }
    
    //反推找出第k個位置的字母
    for(let i=breakPoint; i>=0; i--){   
        if(s[i]>'0' && s[i]<='9'){  //如果s[i]是數字         
            size /= s[i];   //字串長度除以倍數=原字串
            k %= size;      //餘數等於目標數字
        }
        else{ //如果s[i]不是數字(是字母)
            if (k == 0 || k == size){return s[i];}
            size--; //因為不是目標字母，所以size-1繼續找
        }
    }
    
    return 0;
};
let s = "leet2code3"
let k = 10
console.log(decodeAtIndex(s,k))


//--------------------------Runtime Error------------------------------
// var decodeAtIndex_error = function(s, k) {
//     let str = "";   //儲存字串
//     let tmp = "";   //暫存字串
//     for(let i=0; i<s.length; i++){
//         if(s.charCodeAt(i)>96 && s.charCodeAt(i)<123){  //如果是字母
//             str+=s[i];
//         }
//         else if(s[i]>'0' && s[i]<='9'){   //如果是數字    
//             tmp = str;
//             str += tmp.repeat(s[i]-1); //重複書寫d-1次
//         }
//         if(str.length>k){   //當字串長度大於k值(index)時輸出letter
//             return str[k-1];
//         }
//     }
//     return str[k-1];
// };