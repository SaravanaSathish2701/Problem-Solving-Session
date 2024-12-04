// Check the number is odd or even

// let number = 123;

// if (number % 2 == 0) {
//   console.log(`${number} is even`);
// } else {
//   console.log(`${number} is odd`);
// }

function check(num) {
  if (num % 2 == 0) {
    return `${num} is even`;
  } else {
    return `${num} is odd`;
  }
}

console.log(check(12345));
