// Find the longest contiguous subarray containing at most 2 distinct numbers.
// The numbers can be repeating but they must be only two distinct numbers

// Example 1:
// Input: fruits = [1,2,1]
// Output: 3
// Explanation: We can pick from all 3 trees.

// Example 2:
// Input: fruits = [0,1,2,2]
// Output: 3
// Explanation: We can pick from trees [1,2,2].
// If we had started at the first tree, we would only pick from trees [0,1].

function totalFruits(nums) {
  let freq = {};
  let longest = 0;
  let left = 0;
  //   let key = 0;
  for (let right = 0; right < nums.length; right++) {
    freq[nums[right]] = (freq[nums[right]] || 0) + 1;
    console.log(freq);

    while (Object.keys(freq).length > 2) {
      freq[nums[left]]--;
      if (freq[nums[left]] === 0) {
        delete freq[nums[left]];
      }
      left++;
    }

    longest = Math.max(longest, right - left + 1);
    return Object.keys(freq).length;
  }
}
console.log(totalFruits([0, 1, 2, 2]));
