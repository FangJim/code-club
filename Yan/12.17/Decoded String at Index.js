/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var decodeAtIndex = function(s, k) {
    s = "leet2code3", k = 10;
    let front = 0;
    for (let i = 0; i < s.length; i++) {
        if (!isNaN(s[i])) {
            front *= Number(s[i])
                // end = s.substring(i + 1, s.length - 1);
                // s = s.substring(0, i).repeat(arry[i]);
                // console.log(front)
                // end = s.substring(i + 1, s.length).repeat(arry[i]);
                // console.log(res);
                // front.concat(end);
                // end = end.repeat(arry[i]);
        } else {
            front++;
        }
    }
    console.log(front.length)
};
decodeAtIndex()