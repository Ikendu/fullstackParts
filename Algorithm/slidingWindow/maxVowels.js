// 1456. Maximum Number of Vowels in a Substring of Given Length
// Given a string s and an integer k, return the maximum number of vowel
// letters in any substring of s with length k. Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.
// Example 1:

// Input: s = "abciiidef", k = 3
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters.

function maxVowels(str, k) {
  let count = 0;
  let vowels = new Set(["a", "e", "i", "o", "u"]);

  for (let i = 0; i < k; i++) {
    if (vowels.has(str[i])) count++;
  }
  let result = count;
  let left = 0;
  if (result === k) return k;

  for (let right = k; right < str.length; right++) {
    if (vowels.has(str[right])) count++;
    if (vowels.has(str[left])) count--;

    left++;

    result = Math.max(result, count);
  }
  return result;
}

// Using Sliding Window solution
function maxVowel(s, k) {
  let windows = new Set();
  let last = 0;

  for (let i = 0; i < s.length; i++) {
    if (windows.has(s[i])) return true;

    windows.add(s[i]);

    if (windows.size > k) {
      windows.delete(s[last]);
    }
    last++;
  }
  return false;
}
console.log(maxVowels("abciiidef", 3));
