// Get the maximum sub with the highest product value
// Note that the product of an array with a single element is the value of that element.

// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.

// Using two trackers like min, max and result
function maxProdArray(arr) {
  let result = Math.max(...arr);
  let max = 1;
  let min = 1;

  for (let n of arr) {
    let prod = max * n;
    max = Math.max(prod, min * n, n);
    min = Math.max(prod, min * n, n);
    result = Math.max(result, max);
  }
  return result;
}

function maxProdSub(arr) {
  let result = Math.max(...arr);
  let prod = 1;

  for (let i = 0; i < arr.length; i++) {
    prod *= arr[i];
    result = Math.max(result, prod);

    if (prod === 0) prod = 1;
  }

  prod = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    prod *= arr[i];
    result = Math.max(result, prod);

    if (prod === 0) prod - 1;
  }
  return result;
}
// Testing Space
// console.log(maxProdArray([2, 3, -2, 4]));
// console.log(maxProdArray([-2, 0, -1]));
// console.log(maxProdArray([-2, 0, -1, 10]));

console.log(maxProdSub([2, 3, -2, 4]));
console.log(maxProdSub([-2, 0, -1]));
console.log(maxProdSub([-2, 0, -1, 10]));
