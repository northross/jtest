let bill = [3, 10, 2, 9];
let brian = 7;
let k = bill[1];
let b = 12;
// k is the allergy item
// b is the amount brian charges anna
function bonAppetit(bill, k, b) {
  let total = 0;
  for (const item of bill) {
    total += item;
    // console.log(total);
  }
  let anna = (total - k) / 2;
  // console.log(anna);
  let result = Math.abs(anna - b);
  console.log(result);
  if (result === 0) {
    result = 'Bon Appetit';
  } else {
    return result;
  }
}

bonAppetit(bill, k, b);
