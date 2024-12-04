// Identify the number divisible by 3 and 5

// let num = 15;

// if (num % 3 == 0 && num % 5 == 0) {
//   console.log(`${num} is divisible by both 3 and 5.`);
// } else if (num % 3 == 0) {
//   console.log(`${num} is divisible by 3 only.`);
// } else if (num % 5 == 0) {
//   console.log(`${num} is divisible by 5 only.`);
// } else {
//   console.log(`${num} is not divisible by 3 or 5.`);
// }

function divisible(num) {
  if (num % 3 == 0 && num % 5 == 0) {
    return `${num} is divisible by both 3 and 5.`;
  } else if (num % 3 == 0) {
    return `${num} is divisible by 3 only.`;
  } else if (num % 5 == 0) {
    return `${num} is divisible by 5 only.`;
  } else {
    return `${num} is not divisible by 3 or 5.`;
  }
}

console.log(divisible(15));
console.log(divisible(9));
console.log(divisible(10));
console.log(divisible(7));
