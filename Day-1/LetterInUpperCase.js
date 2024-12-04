// Determine the character is in uppercase

function check(ch) {
  if (ch.match(/[A-Z]/)) {
    console.log(ch + " is an UpperCase character");
  } else if (ch.match(/[a-z]/)) {
    console.log(ch + " is a lowercase character");
  } else {
    console.log(ch + " is not an alphabetic letter");
  }
}

let ch;

ch = "A";
check(ch);

ch = "a";
check(ch);

ch = "1";
check(ch);
