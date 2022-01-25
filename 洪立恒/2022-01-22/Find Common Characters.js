/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let Opt = []

    //分解第一字串
    //let LeaderMap = new Map()
    let Leader = words[0].split('')
    Leader = [...new Set(Leader)]

    //紀錄出現次數
    let LeaderCount = new Array(Leader.length).fill(0)
        //[0,0,0,0]
    let WordsCount = words.length

    //合併所有字串
    let WordsConcat = ""

    //WordsConcat = words.join('')

    //O(n)
    //整合成一字串
    for (let i = 0; i < WordsCount; i++) {
        WordsConcat += words[i]
    }

    //O(n*logn)
    for (let i = 0; i < WordsConcat.length; i++) {
        for (let j = 0; j < Leader.length; j++) {
            if (WordsConcat[i] == Leader[j]) {
                LeaderCount[j]++;
                //[1,0,0,0]
                break
            }
        }
    }

    //O(n)
    for (let i = 0; i < LeaderCount.length; i++) {
        if (LeaderCount[i] % WordsCount == 0) {
            //[3,2,6,2] 2
            for (let j = 0; j < (LeaderCount[i] / WordsCount); j++)
                Opt.push(Leader[i])
        }
    }
    return Opt

    //['b','l','l']
};


let test = ['cool', 'lock', 'cook']
console.log(commonChars(test))