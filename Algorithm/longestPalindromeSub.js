// Example 1:
// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

const longestPalindrome = function (s) {
  if (s.length < 2) return s;

  // check from the index outward till the last phalindrome seen
  // Return the length of the seen palindrome
  function checkOutward(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  }

  let start = 0;
  let end = 0;

  for (let i = 0; i < s.length; i++) {
    let odd = checkOutward(i, i);
    let even = checkOutward(i, i + 1);
    let maxLen = Math.max(odd, even);

    let prevMax = end - start;

    if (maxLen > prevMax) {
      start = i - Math.floor((maxLen - 1) / 2);
      end = i + Math.floor(maxLen / 2);
    }
  }

  return s.substring(start, end + 1);
};
console.log(longestPalindrome("babad"));
