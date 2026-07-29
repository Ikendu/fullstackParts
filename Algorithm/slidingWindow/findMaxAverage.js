// 643. Maximum Average Subarray I
// You are given an integer array nums consisting of n elements, and an integer k.
// Find a contiguous subarray whose length is equal to k that has the maximum average
//  value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

function findMaxAve(nums, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  let result = sum;
  let left = 0;

  for (let right = k; right < nums.length; right++) {
    sum = sum + nums[right] - nums[left];
    left++;

    result = Math.max(result, sum);
  }
  return result / k;
}

console.log(findMaxAve([1, 12, -5, -6, 50, 3], 4));
