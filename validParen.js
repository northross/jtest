const isValid = function (s) {
  if (s.length % 2 != 0) {
    return false;
  }
  let mid = s.length / 2;
  console.log(mid);
  for (let i = 0; i <= mid; i++) {
    let endVal = s.length - (1 + i);
    if (s[i] !== '{' || s[i] !== '(' || s[i] !== '[') {
      console.log(s[i]);
      return false;
    } else if (s[i] === '{') {
      console.log(s[i]);
      if (s[i + 1] !== '}' || s[endVal] !== '}') return false;
    } else if (s[i] === '[') {
      if (s[i + 1] !== ']' || s[endVal] !== ']') return false;
    } else if (s[i] === '(') {
      if (s[i + 1] !== ')' || s[endVal] !== ')') return false;
    }
  }
  console.log(true);
  return true;
};

let str = '{}{}';
isValid(str);
