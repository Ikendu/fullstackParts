// 300. Longest Increasing Subsequence
// Given an integer array nums, return the length of the longest strictly increasing subsequence.

// Example 1:
// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

// Example 2:
// Input: nums = [0,1,0,3,2,3]
// Output: 4
// Example 3:

// Input: nums = [7,7,7,7,7,7,7]
// Output: 1

function longestSub(nums) {
  // using n log n

  let tails = [];
  for (let cur of nums) {
    if (tails.length < 1 || cur > tails[tails.length - 1]) tails.push(cur);
    else {
      let left = 0;
      let right = tails.length;

      while (left <= right) {
        let mid = Math.floor((right + left) / 2);

        if (tails[mid] >= cur) right = mid - 1;
        else left = mid + 1;
      }
      tails[left] = cur;
    }
  }
  return tails.length;
}

console.log(longestSub([7, 7, 7, 7, 7, 7, 7]));
