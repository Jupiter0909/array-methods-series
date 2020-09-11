const nums = [1, 2, 3, 4, 5];

// Square numbers
let squareNums = nums.map((num) => {
  return num ** 2;
});

console.log(squareNums);
console.log(nums);

// Square roots
let roots = nums.map((num) => {
  return Math.sqrt(num);
});

console.log(roots);
