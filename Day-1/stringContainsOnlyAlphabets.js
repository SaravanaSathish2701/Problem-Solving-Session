// Check if the String contains only alphabets

// let str = "This is Saravana Sathish";
// let result = str.match(/^[a-zA-Z]$/);

// if (result) {
//   console.log("The string contains only alphabets.");
// } else {
//   console.log("The strinig does not contain alphabets.");
// }

const str = "This is Saravana Sathish.";

let flag = true;

for (let i = 0; i < str.length; i++) {
  if (
    (str[i] >= "a" && str[i] <= "z") ||
    (str[i] >= "A" && str[i] <= "Z") ||
    str[i] == " " ||
    str[i] == "."
  ) {
    continue;
  } else {
    flag = false;
    break;
  }
}

if (flag) {
  console.log("The string contains only alphabets.");
} else {
  console.log("The string does not contain alphabets.");
}
