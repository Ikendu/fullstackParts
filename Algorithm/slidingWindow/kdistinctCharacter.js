function kdistinctCharacters(str, k) {
  let freq = {};
  let longest = 0;
  let left = 0;

  for (let right = 0; right < str.length; right++) {
    freq[str[right]] = (freq[str[right]] || 0) + 1;

    while (Object.keys(freq).length > k) {
      freq[str[left]]--;
      if (freq[str[left]] === 0) {
        delete freq[str[left]];
      }
      left++;
    }

    longest = Math.max(longest, right - left + 1);
  }
  return longest;
}

console.log(kdistinctCharacters("aababbcaacc", 2));
console.log(kdistinctCharacters("abcddefg", 3));
