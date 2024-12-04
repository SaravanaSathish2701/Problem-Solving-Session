// Counting the number of digits in a number

let num = 12345678;
let count = 0;

// while (num > 0) {
//   num = Math.floor(num / 10);
//   count++;
// }

// console.log(count);

console.log(Math.floor(Math.log10(num) + 1));   // functionality of log is dividing the number by 10
