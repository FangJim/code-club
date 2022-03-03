/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    let ans=[];//存放
    let long=0;
    let tag;
    if(s.length<2){
        return s;
    }
    for(let i=0;i<s.length;i++){
        tag=s[i];
        for(let j=s.length;j>0;j--){
            if(s[j]==tag && j-i>long){
                if(comp(i,j)){
                    long=j-i;
                    ans=s.slice(i,j+1)
                    //return ans
                }
            }
            if(i>=j)
                break
        }

    }
    function comp(i,j){
        for(a=i;a<s.length;a++){
            if(a==j || j<a)
                return true
            else if(s[a]!=s[j])
                return false
            else
                j--
        }
    }
    if(long==0)
        return s[0]
};
console.log(longestPalindrome("aacabdkacaa"));