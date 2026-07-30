// You are given a string s and an integer k. You can choose any character of the string
// and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing
// the above operations.

// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.
// Example 2:

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".

function characterReplace(s, k) {
  let freq = {};
  let longest = 0;
  let maxFreq = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    freq[s[right]] = (freq[s[right]] || 0) + 1;

    maxFreq = Math.max(maxFreq, freq[s[right]]);

    let window = right - left + 1;

    while (window - maxFreq > k) {
      freq[s[left]]--;
      left++;
      window = right - left + 1;
    }

    longest = Math.max(longest, window);
  }
  return longest;
}

console.log(characterReplace("ABAB", 2));
console.log(characterReplace("AABABBA", 2));
