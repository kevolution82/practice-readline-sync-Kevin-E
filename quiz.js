// Kevin Edwards
// practice-readline-sync-Kevin-E

const readlineSync = require('readline-sync');

// 1. Prompt user for their name and greet them
const userName = readlineSync.question("What is your name? ");
console.log(`\nHello, ${userName}! Welcome to the Data Types & Operations Quiz.`);

// 2. Ask 5 questions and collect responses
const answer1 = readlineSync.question("\n1. What data type is used to represent true or false values? ");
const answer2 = readlineSync.question("2. What keyword is used to declare a variable in JavaScript? ");
const answer3 = readlineSync.question("3. What is the result of '5' + 3 in JavaScript? ");
const answer4 = readlineSync.question("4. What is the result of '10' - 4 in JavaScript? ");
const answer5 = readlineSync.questionInt("5. Enter your favorite number: "); // numeric input

// 3. Store and print responses
console.log("\nThanks for completing the quiz! Here are your answers:");
console.log(`1. Data type for true/false: ${answer1}`);
console.log(`2. Variable declaration keyword: ${answer2}`);
console.log(`3. '5' + 3 result: ${answer3}`);
console.log(`4. '10' - 4 result: ${answer4}`);
console.log(`5. Your favorite number: ${answer5}`);
