function checkBracket(str) {
  let mapping = { "}": "{", "]": "[", ")": "(" };
  let stack = [];

  for (let c of str) {
    if (Object.values(mapping).includes(c)) {
      stack.push(c);
    } else if (stack.length > 0) {
      let last = stack.pop();
      if (last !== mapping[c]) return false;
    } else {
      return false;
    }
  }
  return stack.length === 0;
}

function closeBracket(str) {
  let stack = [];

  for (let ch of str) {
    if (ch === "{") stack.push("}");
    else if (ch === "[") stack.push("]");
    else if (ch === "(") stack.push(")");
    else {
      let last = stack.pop();
      if (last !== ch) return false;
    }
  }
  return stack.length === 0;
}

// console.log(checkBracket("()"));
// console.log(checkBracket("()[]{}"));
// console.log(checkBracket("(]"));
// console.log(checkBracket("([])"));
// console.log(checkBracket("([)]"));

console.log(closeBracket("()"));
console.log(closeBracket("()[]{}"));
console.log(closeBracket("(]"));
console.log(closeBracket("([])"));
console.log(closeBracket("([)]"));
