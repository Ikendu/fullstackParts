// Get the index of the two numbers that will sum up to the Target

// Using Object
function twoSums(nums, target) {
  let hashMap = {};
  // let myMap = new Map

  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];
    let diff = target - curr;

    console.log(curr, diff, i, hashMap[diff]);

    if (diff in hashMap) {
      // The Object (in) can check number-string against it equivalent number
      return [hashMap[diff], i];
    } else {
      hashMap[curr] = i;
    }
  }
  //   console.log(hashMap);
  return [];
}
console.log(twoSums([2, 4, 6, 7, 1], 10));

// Using Map Method

function twoSumss(nums, target) {
  let myMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (myMap.has(diff)) {
      return [myMap.get(diff), i];
    } else {
      myMap.set(nums[i], i);
    }
  }
  return [];
}

console.log(twoSumss([2, 4, 6, 7, 1], 13));
