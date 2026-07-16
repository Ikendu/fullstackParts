// Given an array of distinct integers candidates and a target integer target,
// return a list of all unique combinations of candidates where the chosen numbers sum to target.
// You may return the combinations in any order

// The same number may be chosen from candidates an unlimited number of times.
// Two combinations are unique if the frequency of at least one of the chosen numbers is different.

// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
// Explanation:
// 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
// 7 is a candidate, and 7 = 7.
// These are the only two combinations.

function makeCombination(candidates, target) {
  let result = [];

  function combiner(idx, comb, total) {
    if (total === target) {
      result.push([...comb]);
      return;
    }
    if (total > target || idx >= candidates.length) return;

    comb.push(candidates[idx]);
    combiner(idx, comb, total + candidates[idx]);
    comb.pop();
    combiner(idx + 1, comb, total);
  }
  combiner(0, [], 0);
  return result;
}

console.log(makeCombination([2, 3, 6, 7], 7));
console.log(makeCombination([2, 3, 5], 8));
console.log(makeCombination([1], 2));
console.log(makeCombination([2], 1));
