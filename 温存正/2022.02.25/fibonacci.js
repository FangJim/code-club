/**
 * @param {number} n
 * @return {number}
 */
var fibonacci = function (n) {
  let pre = 0;
  let post = 1;
  if (n === 0) {
    return pre;
  }
  if (n === 1) {
    return post;
  }
  for (let i = 0; i < n - 1; i++) {
    [pre, post] = [post, pre + post];
  }
  return post;
};
let n = 10;
console.log(fibonacci(n));
