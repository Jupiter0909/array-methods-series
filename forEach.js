const books = ["Harry Potter", "Percy Jackson", "Lord of the Rings"];
const copyBooks = [];
const nums = [1, 2, 3, 4, 5];
const squareNum = [];

// For Loop
// *for (let i = 0; i < books.length; i++) {
// *  copyBooks.push(books[i]);
// *}

// console.log(copyBooks);

// ForEach
books.forEach((book) => {
  copyBooks.push(book);
});

console.log(copyBooks);
// Example

nums.forEach((num) => {
  squareNum.push(num * num);
});

console.log(squareNum);
