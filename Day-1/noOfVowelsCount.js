// Count the number of vowels in a string.
function getCount(str) {
  let vowelsCount = 0;
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  for (let char of str) {
    if (vowels.includes(char)) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}

console.log(getCount("Hello World"));
