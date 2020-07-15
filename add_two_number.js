/*
 Definition for singly-linked list.
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

123.456;
let total = 0;
var addTwoNumbersRec = function (l1, l2, tenthPlace) {
  if (l1 === null || l2 === null) {
    return;
  }

  if (l1 === null) {
    let l2val = l2.val;
    total += l2val;
    return addTwoNumbersRec(null, l2.next, tenthPlace + 1);
  } else if (l2 === null) {
    let l1val = l1.val;
    total += l1val;
    return addTwoNumbersRec(l1.next, null, tenthPlace + 1);
  }

  let l1val = l1.val; // 1,2,3,4,5,6,7,8,9,0
  let l2val = l2.val; // 1,2,3,4,5,6,7,8,9,0

  console.log('vals:', l1val, l2val);

  let localSum = l1val + l2val;
  let localPow = Math.pow(10, tenthPlace);
  let localTotal = localSum * localPow;

  total += localTotal;
  return addTwoNumbersRec(l1.next, l2.next, tenthPlace + 1);
};

var addTwoNumbers = function (l1, l2) {
  addTwoNumbersRec(l1, l2, 0);
};

l1 = new ListNode(1, new ListNode(2, new ListNode(3)));
l2 = new ListNode(4, new ListNode(5, new ListNode(6)));

addTwoNumbers(l1, l2);

console.log(total);
// l1 = new ListNode(1, new ListNode(2, new ListNode(3)));
// l1.next -> new ListNode(2, new ListNode(3))
// .next -> new ListNode(3)
