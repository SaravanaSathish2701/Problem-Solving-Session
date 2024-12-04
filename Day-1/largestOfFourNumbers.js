// Check which is the largest of four numbers

function largest(a, b, c, d) {
  if (a > b && a > c && a > d) {
    return a;
  } else if (b > c && b > d) {
    return b;
  } else if (c > d) {
    return c;
  } else {
    return d;
  }
}

console.log(largest(5, 10, 3, 8));
