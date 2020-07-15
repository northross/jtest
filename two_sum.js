const twoSum = function (arr, tar) {
  let first = 0;
  let last = arr.length - 1;
  let newArr = [];
  while (first !== last) {
    console.log(first, last);
    if (arr[first] + arr[last] > tar) {
      last -= 1;
    } else if (arr[first] + arr[last] < tar) {
      first += 1;
    } else {
      newArr.push([arr[first], arr[last]]);
      first += 1;
    }
  }
  return newArr;
};

let nums = [2, 3, 5, 7, 11, 12, 13, 18];

let myNewArr = twoSum(nums, 18);
console.log(myNewArr);

// let arr = [];
// let z = 5;
// let x = 4;
// arr.push(x);
// arr.push(z);
// console.log(arr);
// console.log(z);

// let pairsThatWork = [] // [[1,6], [3,4], [2,5]]
// while(/*we aren't done scanning list*/){
//   if(/* we find a piar that matches*/)
//     pairsThatWork += [num1, num2]
// }

// if(pairsThatWork === []){
//   console.log('target not reachable');
// }
// console.log(pairsThatWork)
