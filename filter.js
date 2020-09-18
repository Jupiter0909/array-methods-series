const names = [
  "Piper",
  "Leo",
  "Hazel",
  "Frank",
  "Jason",
  "Perseus",
  "Annabeth",
];

const longNames = names.filter((name) => name.length > 5);
console.log(longNames);

const nums = [1, 2, 3, 4, 5];

const largeNums = nums.filter((num) => num ** 2 > 12);
console.log(largeNums);
