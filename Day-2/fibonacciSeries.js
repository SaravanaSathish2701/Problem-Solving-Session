// Generate the Fibonacci Series

// 0 1 1 3 5 8 13

// let n = 10;
// let t1 = 0;
// let t2 = 1;

// if (n == 1) {
//   console.log(0);
// } else if (n == 2) {
//   console.log(0, 1);
// } else {
//   const arr = [0, 1];
//   for (let i = 2; i < n; i++) {
//     arr.push(arr[i - 1] + arr[i - 2]);
//   }
//   console.log(...arr);
// }

function fibonacci(n) {
  if (n == 1) {
    console.log(0);
  } else if (n == 2) {
    console.log(0, 1);
  } else {
    const arr = [0, 1];
    for (let i = 2; i < n; i++) {
      arr.push(arr[i - 1] + arr[i - 2]);
    }
    console.log(...arr);
  }
}

fibonacci(10);
fibonacci(20);
