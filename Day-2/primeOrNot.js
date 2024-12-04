//  Check if the number is prime or not.

let n = 20000;
let flag = true;

if (n != 2 && n % 2 == 0) flag = false;
else {
  for (let i = 3; i * i <= n; i = i + 2) {
    if (n % i == 0) {
      flag = false;
      break;
    }
  }
}

if (flag) {
  console.log(`${n} is a prime number.`);
} else {
  console.log(`${n} is not a prime number.`);
}
