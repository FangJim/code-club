let winnerOfGame = (colors) => {
    let A = 0
    let B = 0
    for (let i = 1; i < colors.length - 1; i++) {
        //because the rule is need same three words
        //if I have AAAA ---take one---> AAA ---take one ---> AA 
        //count two times, so that why I set middle to target  
        if (colors[i - 1] == 'A' && colors[i] === 'A' && colors[i + 1] === 'A') {
            A++
        }
        if (colors[i - 1] == 'B' && colors[i] === 'B' && colors[i + 1] === 'B') {
            B++
        }
    }
    return A > B
};
winnerOfGame("AAAABBBB")