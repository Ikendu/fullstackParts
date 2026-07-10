// Get the length of the longest substring without repeating characters

// Usint Set and Sliding the window (For-loop)

function longestSubStr(str) {
  let left = 0;
  let longest = 0;
  let myset = new Set();

  for (let right = 0; right < str.length; right++) {
    while (myset.has(str[right])) {
      myset.delete(str[left]);
      left++;
    }
    myset.add(str[right]);
    longest = Math.max(longest, right - left + 1);
  }
  return longest;
}
console.log(longestSubStr("abcabcdefbb")); // length = 3

// Using Object and two pointers

function longestSub(str) {
  let left = 0;
  let longest = 0;
  let myObj = {};

  for (let right = 0; right < str.length; right++) {
    let c = str[right];
    myObj[c] = (myObj[c] || 0) + 1;

    while (myObj[c] > 1) {
      myObj[str[left]] -= 1;
      left++;
    }
    longest = Math.max(longest, right - left + 1);
  }
  return longest;
}

console.log(longestSub("abcabcdbb"));
