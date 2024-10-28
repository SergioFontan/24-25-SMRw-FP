let a = 5;
let b = 6;
let c = 7;
let d = 8;

/**
 * OPERADORES LOGICOS
 * 
 * AND: es true cuando ambas expresiones con true
 * OR: es true cuando alguna de las expresiones es true
 * NOT: operador que niega una expresion
 */

// Ejemplos
console.log(a < b); // true
console.log(b < c); // true

console.log(a < b && b < c); // true AND true   --> true
console.log(a > b && b < c); // false AND true  --> false

console.log(a < b || b < c); // true OR true    --> true
console.log(a > b || b < c); // false OR true   --> true
console.log(a > b || b > c); // false OR false  --> false

console.log(c < d);         // true
console.log(!(c < d));      // false