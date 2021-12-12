/**
 * @param {string} s
 * @return {string}
 */
 var Beiju = function(s) {
    let str="";     //儲存字串
    let brackets=1; //判斷是否有括號，0代表左括號，1代表右括號。
    let index=0;    //判斷索引值
    for(let i=0; i<s.length; i++){
        if(s[i]=="["){
            index=0;
            brackets=0;
        }else if(s[i]=="]"){
            brackets=1;
        }else{
            if(brackets==1){        //當brackets==1時，將letter加在最後面
                str += s[i];
            }
            else if(brackets==0){   //當brackets==0時，將letter加在最前面
                str = str.slice(0,index) + s[i] + str.slice(index);   //切割字串後再相加
                index++;
            }
        }
    }
    return str;
};

//test
let a="This_is_a_[Beiju]_text";
let b="[[]][][]Happy_Birthday_to_Tsinghua_University";
let c="[[]][]world[hello_]_!";
console.log(Beiju(a));
console.log(Beiju(b));
console.log(Beiju(c));