let arr = [-4, 3, -9, 0, 4, 1];

function plusMinus(arr) {
  let pos = 0;
  let neg = 0;
  let zer = 0;
  let count = 0;
  let arLen = arr.length;
  for (const int of arr) {
    if (int > 0) {
      pos += 1;
    } else if (int < 0) {
      neg += 1;
    } else {
      zer += 1;
    }
  }
  console.log((pos / arLen).toFixed(6));
  console.log((neg / arLen).toFixed(6));
  console.log((zer / arLen).toFixed(6));
}

plusMinus(arr);
