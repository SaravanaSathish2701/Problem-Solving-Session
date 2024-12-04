//  Calcualte the difference between two numbers

function diff(a, b) {
  if (a > b) {
    return a - b;
  } else {
    return b - a;
  }
}

console.log(diff(100, 80));

function calculate(c, d) {
  return Math.abs(c - d);
}

console.log(calculate(120,100));
