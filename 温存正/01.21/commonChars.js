/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  let ans = new Map();
  for (let i = 0; i < words[0].length; i++) {
    let nowWord = words[0].split("").sort();
    ans.set(nowWord[i], i);
  }
  for (let i = 1; i < words.length; i++) {}
  if (ans.has("b")) {
    console.log("fuck");
  }
  console.log(ans);
};
let words = ["bella", "label", "roller"];
commonChars(words);
