// let a = '5'; // Tengo un 5 en string
// console.log(a); // Pinto el string

// let b = parseInt(a); // Cambio de string a number
// console.log(b); // Pinto number

// // Comparamos
// console.log(b > 2); // numero puede ser comparado
// console.log(a > 2); // string no puede ser comparado (aunque da resultado)

// let c = '5.5'; // Tengo un 5.5 en string
// let d = parseFloat(c);  // Cambio de string a number (con decimales)
// console.log(d); // Pinto number (con decimales)
// console.log(d > 5); // Comparo con number (con decimales)

// let e = prompt("Introduce un numero"); // Variable e que contiene lo que introduzca el usuario
// console.log(e); // Pintar lo que introduce el usuario en formato STRING
// let f = parseInt(e); // Creo variable f con lo que ha introducido el usuario pero convertido a NUMBER
// console.log(f); // Muestro el numero
// console.log(f > 4); // Comparo el numero

/**
 * HOJA 2 EJERCICIOS
 */

// Ejercicio 1. Solicita dos numeros al usuario. Suma ambos e imprime el resultado
// let num1 = prompt("Introduce un numero"); // Pedir el PRIMER numero al usuario
// let num2 = parseInt(num1); // El primer numero está en number

// let num3 = prompt("Introduce un numero"); // Pedir el SEGUNDO numero al usuario
// let num4 = parseInt(num3); // El segundo numero está en number

// console.log(num2 + num4); // Sumo los dos numeros 
// console.log(num1 + num3); // Intento sumar pero CONCATENA porque ambos son string

// // Ejercicio 02. Solicita dos numeros al usuario. Resta el segundo al primero. Muestra resultado
// let num5 = prompt("Introduce un numero"); // Pedir el PRIMER numero al usuario
// let num6 = parseInt(num5); // El primer numero está en number

// let num7 = prompt("Introduce un numero"); // Pedir el SEGUNDO numero al usuario
// let num8 = parseInt(num7); // El segundo numero está en number

// console.log(num6 - num7); // Resto los dos numeros 

// Ejercicio 03. Solicita dos numeros al usuario. Multimplica ambos y muestra resultado

// Ejercicio 10. Solicita tres numeros al usuario. Calcula el promedio y muestra el resultado

// Pido los numeros al usuario (ESTAN TODOS EN STRING, POR TANTO NO SE PUEDEN SUMAR AUN)
// let num1 = prompt("Introduce el PRIMER numero");
// let num2 = prompt("Introduce el SEGUNDO numero");
// let num3 = prompt("Introduce el TERCER numero");

// // Paso los valores en STRING a NUMBER para poderlos sumar
// let num4 = parseInt(num1);
// let num5 = parseInt(num2);
// let num6 = parseInt(num3);

// // Muestro el resultado
// console.log("El promedio es " + (num4 + num5 + num6)/3);


/**
 * HOJA 16.
 */

// Ejercicio 8. (tuneado)
// Escribe un programa que pida al usuario una cantidad de segundos.
// Luego muestra en consola cuantas horas son esos segundos
// let segundos = prompt("Introduce los segundos");

// let segundos_number = parseInt(segundos); // lo llamo segundos_number por que contiene segundos en tipo NUMBER

// let minutos = segundos_number / 60;

// let horas = minutos / 60;

// console.log("El resultado es " + horas);


// Ejercicio 3.
// Escribe un programa que pida al usuario la base y altura de un triangulo.
// Muestra por consola el area del triangulo
let base = prompt("Introduce la base del triangulo");
let altura = prompt("Introduce la altura del triangulo");

let base_number = parseInt(base); // base_number contiene la base introducida por el usuario en NUMBER
let altura_number = parseInt(altura); // altura_number contiene la altura introducida por el usuario en NUMBER

let area = (base_number * altura_number) / 2;

console.log("El resultado es " + area);

/**
 * Hoja 17.
 */
// Ejercicio 04. (distinto texto, mismo enunciado)
// Escribe un programa que pida al usuario la distancia de un viaje en km.
// Se debe solicitar tambien el precio por cada km.
// El resultado del viaje debe mostrarse por consola

let distancia = prompt("Introduce la distancia del viaje");
let precio = prompt("Introduce el precio por cada km");

let distancia_number = parseFloat(distancia); // distancia_number contiene el dato del usuario CON DECIMALES en formato NUMBER
let precio_number = parseFloat(precio); // precio_number contiene el dato del usuario CON DECIMALES en formato NUMBER

// console.log("El viaje ha costado " + (distancia_number * precio_number));

let total = distancia_number * precio_number;
console.log("El viaje ha costado " + total);
