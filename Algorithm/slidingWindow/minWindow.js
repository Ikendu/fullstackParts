// Given two strings s and t of lengths m and n respectively, return the minimum window substring of s
// such that every character in t (including duplicates) is included in the window.
// If there is no such substring, return the empty string "".

// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

function minWindow(s, t) {
  let need = {};
  let required = 0;

  for (let ch of t) {
    if (!need[ch]) required++;
    need[ch] = (need[ch] || 0) + 1;
  }

  let window = {};
  let formed = 0;
  let minLength = Infinity;
  let start = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    window[s[right]] = (window[s[right]] || 0) + 1;
    if (window[s[right]] === need[s[right]]) formed++;

    while (formed === required) {
      let curLength = right - left + 1;

      if (minLength > curLength) {
        minLength = curLength;
        start = left;
      }
      window[s[left]]--;
      if (window[s[left]] < need[s[left]]) formed--;
      left++;
    }
  }

  if (minLength === Infinity) return "";
  return s.slice(start, minLength + start);
}

console.log(minWindow("ADOBECODEBANC", "ABC"));
