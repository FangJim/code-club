/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var decodeAtIndex = function (s, k) {
  let sl = s.length;
  let All = [];
  let Text = [];
  let fuck;
  let flag=0
  let j = 0,p=0,x=0,m=0;
  let count = 0;
  let tmp=0
  for (let i = 0; i < sl; i++) {
    if (s[i] >= "2" && s[i] <= "9") {
      if (count != 0) {
        All[j] = count.toString();
        Text[p] = fuck;
        count = 0;
        j++;
        p++;
        flag=0
      }
      if (typeof All[j - 1] === "number") {
        All[j - 1] *= parseInt(s[i]);
        j--;
      } else {
        All[j] = parseInt(s[i]);
      }
      j++;
    } 
    else {
      if(flag===0){fuck=s[i];flag=1}
      else{
        fuck += s[i];
      }
      count++;
    }
  }
  if(flag===1){
      Text[p] = fuck;
      All[j] = count.toString();
    }
  let al = All.length;
  console.log(All);
  console.log(Text);
  while(k>0){
      if(k<=parseInt(All[x])){
        console.log(Text[m][k-1]);
        return Text[m][k-1]
      }
      else{
          let y=x
          tmp = parseInt(All[x])*All[++y]
          if(k<=tmp){
              console.log(Text[m][(tmp%k-1)%parseInt(All[x])]);
              return Text[m][(tmp%k-1)%parseInt(All[x])]
          }
      }
      k-=tmp
      x+=2
      m++
    //   console.log("tmp:"+tmp);
    //   console.log("k:"+k);
  }
};
let s = "a2b3c4d5e6f7g8h9"
,k = 9;
decodeAtIndex(s, k);
