var longestPalindrome = function (s) {
  let pal = "";
  let holder = [];
  let reverse;
  for (let char of s) {
    holder.push(char);

    if (holder.length > 1) reverse = holder.reverse();
    let holderStr = reverse.join("");
    if (holderStr === holder.join("")) pal = holderStr;
  }
  console.log(reverse.join(""));
  return pal;
};
console.log(longestPalindrome("babad"));
