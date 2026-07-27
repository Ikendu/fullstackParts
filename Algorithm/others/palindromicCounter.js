function palindromicCounter(s) {
  if (s.length < 1) return 0;

  let count = 0;

  function checkOutward(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
      count++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    checkOutward(i, i);
    checkOutward(i, i + 1);
  }
  return count;
}
console.log(palindromicCounter("abc"));
console.log(palindromicCounter("aaa"));
