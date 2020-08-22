function hurdleRace(danMax, height) {
  let maxHeight = height.reduce(function (a, b) {
    return Math.max(a, b);
  });
  console.log(maxHeight);
  let result = maxHeight - danMax;
  if (result < 0) {
    result = 0;
  }
  return result;
}
let danMax = 4;
let height = [1, 6, 3, 5, 2];
hurdleRace(danMax, height);
