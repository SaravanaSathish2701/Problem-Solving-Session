// Find the maximum and minimum of the number

let num1 = 10;
let num2 = 5;
let num3 = 12;

let max, min;

if (num1 > num2 && num1 > num3) {
  max = num1;
} else if (num2 > num3) {
  max = num2;
} else {
  max = num3;
}

if (num1 < num2 && num1 < num3) {
  min = num1;
} else if (num2 < num3) {
  min = num2;
} else {
  min = num3;
}

// if (num1 != max && num1 != min) {
//   mid = num1;
// } else if (num2 != max && num2 != min) {
//   mid = num2;
// } else {
//   mid = num3;
// }

let mid = num1 + num2 + num3 - max - min;

console.log(max, min, mid);


// using function 

// function max(num1, num2){
//     if(num1 > num2){
//         return num1;
//     }else{
//         return num2;
//     }
// }

// let maximum = console.log(max(10,5));

// min = num1 + num2 - maximum;

// console.log(min);