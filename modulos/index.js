const Calculator = require("./Calculator");

console.log("2 + 3 =", Calculator.add(2,3));
console.log("7 - 5 =", Calculator.subtract(7,5));
console.log("4 * 6 =", Calculator.multiply(4,6));
console.log("9 / 3 =", Calculator.divide(9,3));
console.log("9 / 0 =", Calculator.divide(9,0));