// You are given a string s consisting of lowercase English letters.
// A duplicate removal consists of choosing two adjacent and equal letters and removing them.

// We repeatedly make duplicate removals on s until we no longer can.

// Example 1:

// Input: s = "abbaca"
// Output: "ca"
// Explanation:
// For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and
// this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is
// possible, so the final string is "ca".

// Easy
function removeDup(str) {
  let stack = [];

  for (let ch of str) {
    if (stack.length && stack[stack.length - 1] === ch) {
      stack.pop();
    } else {
      stack.push(ch);
    }
  }
  return stack.join("");
}
console.log(removeDup("abbaca"));

// You are given a string s and an integer k, a k duplicate removal consists
// of choosing k adjacent and equal letters from s and removing them, causing the
// left and the right side of the deleted substring to concatenate together.

// Example
// Input: s = "deeedbbcccbdaa", k = 3
// Output: "aa"
// Explanation:
// First delete "eee" and "ccc", get "ddbbbdaa"
// Then delete "bbb", get "dddaa"
// Finally delete "ddd", get "aa"

// Medium
function removeDuplicates(str, k) {
  let stack = [];
  let result = "";

  for (let ch of str) {
    if (stack.length && stack[stack.length - 1].char === ch) {
      stack[stack.length - 1].count++;

      if (stack[stack.length - 1].count === k) {
        stack.pop();
      }
    } else {
      stack.push({ char: ch, count: 1 });
    }
  }
  for (let ch of stack) {
    result += ch.char.repeat(ch.count);
  }
  return result;
}

console.log(removeDuplicates("deeedbbcccbdaa", 3));
