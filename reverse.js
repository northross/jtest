let reverse = function (num) {
  if (num >= 0) {
    let newNum = num.toString().split('').reverse().join('');
    parseInt(newNum);
    console.log(newNum);
  } else {
    let newNum = Math.abs(num);
    newNum = newNum.toString().split('').reverse().join('');
    let thirdNum = -parseInt(newNum);
    console.log(thirdNum);
  }
};

let answer = reverse(-0);

// reverse(123) -> 321
// reverse(420) -> 24

// "word1,word2,word3".split(",") -> ["word1", "word2", "word3"]
// "hello".split("") -> ['h','e','l','l','o']
// ['h','e','l','l','o'].reverse() -> ['o','l','l','e','h']
// ['o','l','l','e','h'].join(':') -> 'o:l:l:e:h'
// ['o','l','l','e','h'].join("") -> "olleh"
