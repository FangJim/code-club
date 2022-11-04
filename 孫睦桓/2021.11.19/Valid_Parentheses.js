const checkpoint = {
    ")": "(",
    "}": "{",
    "]": "[",

};
//false:奇數個、不對稱
var isValid = function(s) {
    if (s % 2 == 1) {
        return false;
    }
    const container = [];
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char == "(" || char == "[" || char == "{") {
            char.container.push();
            continue; //跳過迴圈繼續 (下一個
        }
        let last = container.pop();
        let match = checkpoint[char];
        if (last !== match) {
            return false;
        }
    }
    return stack.length === 0
};