// Given a string s, find the length of the longest substring without duplicate characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.

function lengthOflongest(s) {
  let window = new Set();
  let longest = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    while (window.has(s[right])) {
      window.delete(s[left]);
      left++;
    }
    window.add(s[right]);
    longest = Math.max(longest, right - left + 1);
  }
  return longest;
}

console.log(lengthOflongest("abcabcbb"));
