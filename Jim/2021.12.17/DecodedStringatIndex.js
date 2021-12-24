/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
let decodeAtIndex = (s, k) => {
    let arr = s.split('');
    let temp = "";
    let newStr = "";
    const map = decodeToMap(arr);
    if (map.size === 0) {
        return s[k - 1]
    }
    try {
        map.forEach((key, value) => {
            temp = newStr + value
            newStr = ""
            for (let i = 0; i < key; i++) {
                newStr += temp;
                if (k <= newStr.length) {
                    throw newStr[k - 1];
                }
            }
        })
    } catch (error) {
        return error
    }

};
function decodeToMap(arr) {
    let map = new Map();
    let prevIsNum = false// to see prev isn't the number
    let keyTemp = "";
    let valueTemp = 0;
    for (let i = 0; i < arr.length; i++) {
        //ASCII code 0:48 9:57
        let char_ASCII = arr[i].charCodeAt();
        if (char_ASCII >= 48 && char_ASCII <= 57) {
            if (prevIsNum) {
                //if a lot of number continued 
                valueTemp = valueTemp * 10 + (char_ASCII - 48);
            } else {
                valueTemp = (char_ASCII - 48)
            }
            prevIsNum = true;

            //for last one
            if (i === arr.length - 1) map.set(keyTemp, valueTemp);
        }
        else {
            if (prevIsNum) {
                //如果我是字母 我前一個是數字 則放進map 
                map.set(keyTemp, valueTemp);
                keyTemp = "";
                valueTemp = 0;
                prevIsNum = false;
            }
            keyTemp += arr[i]
        }

    }
    return map
}
console.log(decodeAtIndex('abc', 1))