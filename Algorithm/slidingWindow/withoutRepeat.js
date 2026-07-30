let map = {};
let left = 0;
let maxFreq = 0;
let longest = 0;

for (let right = 0; right < s.length; right++) {
  map[s[right]] = (map[s[right]] || 0) + 1;

  maxFreq = Math.max(maxFreq, map[s[right]]);

  window = right - left + 1;

  while (window - maxFreq > k) {
    map[s[left]]--;
    left++;
    window = right - left + 1;
  }
  longest = Math.max(longest, window);
}
return longest;
