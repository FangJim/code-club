/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.toLowerCase()
    s = s.replace(/[^a-z0-9]/gi, "")
    let sl = s.length;

    if(s=="")return true
    for(let i =0;i<(sl/2)+1;i++){
        if(s[i]!=s[sl - i - 1]){
            return false
        }
    }
    return true
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));