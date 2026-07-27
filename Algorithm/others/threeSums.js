// Function gives the sum of array elements that sums up to zero without repetition

function threeSum(nums) {
  nums.sort((a, b) => a - b);
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum > 0) k--;
      else if (sum < 0) j++;
      else {
        result.push([nums[i], nums[j], nums[k]]);
        j++;
        if (nums[j] === nums[j - 1] && j < k) j++;
      }
    }
  }

  return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
