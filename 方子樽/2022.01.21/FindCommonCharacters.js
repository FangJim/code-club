/**
 * @param {string[]} words
 * @return {string[]}
 */
class Node {
    constructor(data) {
        this.data = data
        this.state = false
    }
}

let commonChars = (words) => {
    const length = words.length
    const ans = []
    let newMap;
    //bella
    //init map
    const origMap = createMap(words[0])
    console.table(origMap)
    //compare
    for (let i = 1; i < length; i++) {
        newMap = createMap(words[i]);
        console.log(newMap)
        console.log('======Compare=====')
        for (const item of newMap) {
            //change value
            if (origMap.has(item[0])) {
                let node = origMap.get(item[0])

                if (node.data > item[1].data) {
                    node.data = item[1].data
                }

                node.state = true
                origMap.set(item[0], node)
            }
            console.table(origMap)
        }
        console.log('=====Remove=====')
        //remove key if not exist in origMap
        for (const item of origMap) {
            if (!item[1].state) {
                origMap.delete(item[0])
            }
            else {
                item[1].state = false
            }
            console.table(origMap)
        }
    }

    //output
    for (const item of origMap) {
        let times = item[1].data
        for (let i = 0; i < times; i++) {
            ans.push(item[0])
        }
    }
    return ans
};

let createMap = (word) => {
    const map = new Map();
    for (let i = 0; i < word.length; i++) {
        if (map.has(word[i])) {
            let node = map.get(word[i])
            node.data += 1
            map.set(word[i], node)
        }
        else {
            const node = new Node(1)
            map.set(word[i], node)
        }
    }
    return map
}

console.log(commonChars(["bellax", "label", "roller"]))