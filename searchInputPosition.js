let nums = [1, 3, 5, 6];
let result = 0;

const searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > target) {
      result = nums.indexOf(nums[i]);
      console.log(result);
      return;
    }
  }
  console.log(result);
};

searchInsert(nums, 4);
