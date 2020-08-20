let arr = [
  1,
  2,
  3,
  4,
  5,
  5,
  6,
  7,
  8,
  5,
  9,
  8,
  7,
  6,
  5,
  5,
  4,
  3,
  2,
  5,
  5,
  5,
  5,
  5,
  5,
];
// let newAr = ar.split(' ');
//     let result = 0
//     console.log("ar is ",  newAr);
//     let newerAr = newAr.map(item => parseInt(item))
//     console.log(newerAr)

// let arr = '11 2 4 4 5 6 10 8 -12';

function diagonalDifference(arr) {
  let newArr = arr.flat(3);
  console.log(newArr);
  // let newAr = arr.split(' ');

  // let newerAr = newAr.map((item) => parseInt(item));

  let n = Math.sqrt(newerAr.length);
  let countOne = 0;
  let countTwo = 0;

  for (let i = 0; i <= newerAr.length; i += n + 1) {
    countOne += newerAr[i];
    console.log(countOne);
  }

  for (let j = n - 1; j <= newerAr.length - n; j += n - 1) {
    countTwo += newerAr[j];
    console.log(countTwo);
  }

  let result = Math.abs(countOne - countTwo);

  return result;
}

diagonalDifference(arr);
