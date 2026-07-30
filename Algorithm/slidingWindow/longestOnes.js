// Given a binary array nums and an integer k, return the maximum number of consecutive
// 1's in the array if you can flip at most k 0's.

// Example 1:
// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

function longestOnes(nums, k) {
  let zeros = 0;
  let longest = 0;
  let left = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) zeros++;
    while (zeros > k) {
      if (nums[left] === 0) zeros--;
      left++;
    }
    longest = Math.max(longest, i - left + 1);
  }
  return longest;
}
console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
