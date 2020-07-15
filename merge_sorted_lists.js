let l1 = [1, 2, 6, 12, 16, 48, 101];
let l2 = [1, 4, 11, 12, 18, 99, 100, 125, 136];

let number = 0;
var mergeTwoLists = function (list1, list2) {
  let newList = [];
  while (list1.length >= 1 && list2.length >= 1) {
    if (list1[0] > list2[0]) {
      number = list2.shift();
      newList.push(number);
    } else {
      number = list1.shift();
      newList.push(number);
    }
  }

  // if both lists are empty do this
  if (list1.length === 0 && list2.length === 0) {
    return newList;
  }

  // if we make it this far, we can assume that either list1 is non-emtpy or
  // list2 is non-empty, but not both
  let nonEmptyList = null;
  if (list1.length === 0) {
    nonEmptyList = list2;
  } else {
    nonEmptyList = list1;
  }

  while (nonEmptyList.length > 0) {
    number = nonEmptyList.shift();
    newList.push(number);
  }
  return newList;
};

/**
 * mergeTwoLists([1,4,5], [2,6,8]) -> [1,2,4,5,6,8]
 */

let returnVal = mergeTwoLists(l1, l2);

console.log(returnVal);
