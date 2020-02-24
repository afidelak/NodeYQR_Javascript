const text = "Game of Thrones"
const firstChar = text.charAt(0);
const secondChar = text.charAt(5);
const thirdChar = text.charAt(8);

let result = (firstChar.concat(secondChar.concat(thirdChar)));

result = result.toUpperCase();

console.log(`The final result is: ${result}`);