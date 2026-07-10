// Get the max area that will hold the max amount of water

function maxArea(height) {
  //an array of heights for different area

  let left = 0;
  let right = height.length - 1;
  let maxWidth = 0;

  while (left < right) {
    let min = Math.min(height[left], height[right]);
    let width = right - left;
    maxWidth = Math.max(maxWidth, min * width);

    if (height[left] < height[right]) left++;
    else right--;
  }
  return maxWidth;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
