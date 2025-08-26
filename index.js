const readlineSync = require('readline-sync');

// Step 1: Prompt user for a string
const userString = readlineSync.question('Enter a string: ');

// Step 2: Prompt user for an index number
const index = readlineSync.questionInt('Enter the index of the character you want: ');

// Step 3: Use bracket notation to access character
if (index >= 0 && index < userString.length) {
  const charAtIndex = userString[index];
  console.log(`The character at index ${index} is: '${charAtIndex}'`);
} else {
  console.log('Invalid index! Please enter a number within the string length.');
}
