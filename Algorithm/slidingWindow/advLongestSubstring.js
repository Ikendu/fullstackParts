// Given a string s and an integer k, return the length of the longest substring of s such that
//  the frequency of each character in this substring is greater than or equal to k.
// if no such substring exists, return 0.

// Example 1:
// Input: s = "aaabb", k = 3
// Output: 3
// Explanation: The longest substring is "aaa", as 'a' is repeated 3 times.

// Example 2:
// Input: s = "ababbcb", k = 2
// Output: 5
// Explanation: The longest substring is "ababb", as 'a' is repeated 2 times and 'b' is repeated 3 times.

// Using Divide and Conqure
function longestKsub(str, k) {
  if (str.length < 1) return 0;

  let longest = 0;
  let freq = {};

  for (let ch of str) {
    freq[ch] = (freq[ch] || 0) + 1;
  }

  for (let ch of str) {
    if (freq[ch] < k) {
      let parts = str.split(ch);
      for (let part of parts) {
        // if (part.length < 1) longest = 0;
        longest = Math.max(longest, longestKsub(part, k));
      }
      return longest;
    }
  }
  return str.length;
}
console.log(longestKsub("ababbcb", 2));
console.log(longestKsub("aaabb", 3));
