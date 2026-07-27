// Determine the number of consecutive numbers in an Array

const longestConsecutive = (nums) => {
  let len = nums.length;
  if (len < 2) return len;

  sortedNums = new Int32Array(nums).sort();
  console.log(sortedNums);

  let long = 1;
  let longest = 1;

  for (let i = 1; i < len; i++) {
    let diff = sortedNums[i] - sortedNums[i - 1];

    if (diff === 1) {
      long++;
    } else if (diff > 0) {
      if (long > longest) longest = long;
      long = 1;
    }
  }
  return longest;
};



console.log(
  longestConsecutive([3, 2, 1, 5, 4, 7, 10, 20, 21, 22, 80, 84, 100]),
);
