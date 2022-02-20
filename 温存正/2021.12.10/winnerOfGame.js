/**
 * @param {string} colors
 * @return {boolean}
 */
 var winnerOfGame = function(colors) {
    let Alice=0
    let Bob=0
    for(let i=0;i<colors.length;i++){
        if(colors[i] === 'A' && colors[i-1]==='A' && colors[i+1]==='A'){
            Alice++
        }
        else if(colors[i] === 'B' && colors[i-1]==='B' && colors[i+1]==='B'){
            Bob++
        }
    }
    if(Alice>Bob){
        //console.log("true");
        return true
    }
    else{
        //onsole.log("false");
        return false
    }
};
let colors = "ABBBBBBBAAA"
winnerOfGame(colors)