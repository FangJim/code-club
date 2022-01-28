/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let Length = columnTitle.length
    if (Length === 1) return columnTitle[0].charCodeAt() - 64
    let Opt = 0,
        num = 0
    for (let i = Length - 1; i >= 0; i--) {
        let Temp = columnTitle[i].charCodeAt() - 64
        Temp *= Math.pow(26, num)
        Opt += Temp
        num++
    }
    return Opt
};

// A = 1 ->           26^0
// AA = 27 ->         26^1 + 26^0
// BA = 53 ->         (2)*26^1 + (1)*26^0
// CA = 79 ->         (3)*26^1 + (1)*26^0
// CZ = 104->         (3)*26^1 + (26)*26^0
// AAA = 703 ->       26^2 + 26^1 + 26^0
// AAAA = 18279 ->    26^3 + 26^2 + 26^1 + 26^0
// AAAAA = 475255 ->  26^4 + 26^3 + 26^2 + 26^1 + 26^0


console.log(titleToNumber("ZZZ"))