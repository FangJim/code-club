const BrokenKeyboard = function(str) {
    str = "This_is_a_[Beiju]_text";
    let arry = "";
    let front = "";
    let end = "";
    let i = 0;
    let j = 0;
    while (i < str.length) {
        arry += str[i];
        if (str[i + 1] === '[') {
            j = -1;
        }

        console.log(arry[j])
        i++;
        j++;
    }
}
BrokenKeyboard()