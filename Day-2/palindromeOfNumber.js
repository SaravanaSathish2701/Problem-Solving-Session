// Check if the number is palindrome or not.

let n = 12321;
let temp = n;
let rev = 0;

while (temp > 0) {
  rev = rev * 10 + (temp % 10);
  temp = Math.floor(temp / 10);
}

console.log(n, rev, rev === n);
