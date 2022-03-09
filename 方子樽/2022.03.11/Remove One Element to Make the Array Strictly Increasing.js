/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = (s, p) => {
  const ans = [];
  p = p.split("").sort().join("");
  for (let i = 0; i <= s.length - p.length; i++) {
    let temp = s
      .slice(i, i + p.length)
      .split("")
      .sort()
      .join("");
    if (temp === p) ans.push(i);
  }
  return ans;
};

findAnagrams("abab", "ab");
