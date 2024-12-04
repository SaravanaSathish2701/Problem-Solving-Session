// Calculate the factorial of the number.

// let n = 5;
// let fact = 1;

// while (n > 0) {
//   fact = fact * n;
//   n--;
// }

// console.log("Factorial is", fact);

function fact(n) {
  if (n <= 1) return 1;
  return fact(n - 1) * n;
}

console.log(fact(5));
