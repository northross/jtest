let arr = ['flower', 'flow', 'flight'];

var longestCommonPrefix = function (strs) {
  let pre = '';
  for (let i = 0; i < strs.length-1; i++;) {
  let char = strs[0][i]
  const isChar = (value) => value[i] === char;
    if (char === strs.every(isChar) {
      pre += strs[0][i];
      console.log(pre);
    } else {
      return pre;
    }
  }
};

longestCommonPrefix(arr);


var longestCommonPrefix = function (strs) {
  let prefix = '';
  if (strs.length === 0) return prefix

  for (let i = 0; i < strs[0].strngth; i++) {
    let character = strs[0][i];
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== character) return prefix
    }
    prefix = prefix + character
  }
}