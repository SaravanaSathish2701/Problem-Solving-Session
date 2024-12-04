const userInput = ["1050"];
let num = Number(userInput[0]);
let noOfDigits = Math.floor(Math.log10(num));
let sum = 0;

while (num > 0) {
  let digits = num % 10;
  sum = sum + digits ** noOfDigits;
  noOfDigits--;
  num = Math.floor(num / 10);
}

console.log(sum);

