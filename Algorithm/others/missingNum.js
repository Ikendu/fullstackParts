// Find the missing number from an array of numbers

function missing(nums) {
  let count = nums.length;

  for (let i = 0; i < nums.length; i++) {
    count += i - nums[i];
  }
  return count;
}

console.log(missing([3, 0, 1]));
console.log(missing([9, 6, 4, 2, 3, 5, 7, 0, 1]));

function missingII(nums) {
  let vector = new Array(nums.length + 1).fill(-1);

  for (let i = 0; i < nums.length; i++) {
    vector[nums[i]] = nums[i];
  }

  for (let i = 0; i < vector.length; i++) {
    if (vector[i] === -1) return i;
  }
}

console.log(missingII([9, 6, 4, 2, 3, 5, 7, 0, 1]));
