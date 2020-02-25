let message = "3.14 is a great number but 42\.\.\. is the answer to life\.";
const pi = message.substr(0 , 4);
let piNumerical = parseFloat(pi);
let separator = message.indexOf("\.\.\.");
let answerToLife = message.slice(separator-2);
let answerToLifeNumerical = parseInt(answerToLife);

let result = piNumerical + answerToLifeNumerical;

console.log(`Result: ${result}`);
console.log(`${result} is the result of adding ${piNumerical.toString()} and ${answerToLife.toString()}`);
 

