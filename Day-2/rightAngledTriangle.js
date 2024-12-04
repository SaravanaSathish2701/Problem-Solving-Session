// Create a Right angled triangle.

// let n = 6;

// for (let row = 0; row < n; row++) {
//   let arr = [];
//   for (let col = 0; col < n; col++) {
//     if (col == 0 || col == 5 || row == 0 || row == 5) {
//       arr.push("*");
//     } else {
//       arr.push(" ");
//     }
//   }
//   console.log(arr.join(" "));
// }

// ---------------------------------------------------------------

// let n = 6;

// for (let row = 0; row < n; row++) {
//   let arr = [];
//   for (let col = 0; col < n; col++) {
//     if (col == row) {
//       arr.push("*");
//     } else {
//       arr.push(" ");
//     }
//   }
//   console.log(arr.join(" "));
// }

// ----------------------------------------------------------------

// let n = 5;

// for (let row = 0; row < n; row++) {
//   let arr = [];
//   for (let col = 0; col < n; col++) {
//     if (col == row || col == 4 - row) {
//       arr.push("*");
//     } else {
//       arr.push(" ");
//     }
//   }
//   console.log(arr.join(" "));
// }

// ----------------------------------------------------------------

// let n = 5;
// for (let i = 0; i < n; i++) {
//   let arr = [];
//   for (let j = 0; j < n; j++) {
//     if (j >= n - 1 - i) {
//       arr.push("*");
//     } else {
//       arr.push(" ");
//     }
//   }
//   console.log(arr.join(" "));
// }

// -------------------------------------------------------------------

// let n = 5;

// for (let row = 0; row < n; row++) {
//   let arr = [];
//   for (let col = 0; col < n; col++) {
//     if (col <= n - 1 - row) {
//       arr.push("*");
//     } else {
//       arr.push(" ");
//     }
//   }
//   console.log(arr.join(" "));
// }

// -----------------------------------------------------------------

// let n = 5;

// for (let row = 0; row < n; row++) {
//   let arr = [];
//   for (let col = 0; col < n; col++) {
//     if (col >= row) {
//       arr.push("*");
//     } else {
//       arr.push(" ");
//     }
//   }
//   console.log(arr.join(" "));
// }

// --------------------------------------------------------------------

// let n = 5;

// for (let row = 0; row < n; row++) {
//   let arr = [];
//   for (let col = 0; col < n; col++) {
//     if (col <= row) {
//       arr.push("*");
//     } else {
//       arr.push(" ");
//     }
//   }
//   console.log(arr.join(" "));
// }

// --------------------------------------------------------------

let n = 5;

for (let row = 0; row < n; row++) {
  let arr = [];
  for (let col = 0; col < n; col++) {
    if (
      col == 0 ||
      row == 0 ||
      col == n - 1 ||
      (col == row && row >= n / 2) ||
      (col == n - 1 - row && row >= n / 2)
    ) {
      arr.push("$");
    }
    // else if (col > row || col < n - 1 - row) {
    //   arr.push("*");
    // }
    else {
      console.log(" ");
    }
  }
  console.log(arr.join(" "));
}
