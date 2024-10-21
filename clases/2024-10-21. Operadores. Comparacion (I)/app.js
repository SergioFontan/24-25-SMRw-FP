/**
 * OPERADORES: comparación
 * 
 * comparación: necesitan dos elementos que comparar, es decir ver o preguntar por su contenido
 * 
 * <        menor que           Devuelve true si el valor de la izquierda es menor que el de la derecha
 * <=       menor o igual que   Lo mismo que 'menor que' pero tambien true si es igual 
 * >        mayor que           Devuelve true si el valor de la izquierda es mayor que el de la derecha
 * >=       mayor o igual que   Lo mismo que 'mayor que' pero tambien true si es igual
 * ==       igual               Devuelve true si el contenido es el mismo.
 * ===      igual               Devuelve true si el contenido es el mismo y ademas el tipo de dato es el mismo.
 * !=       distinto de         Devuelve true si el valor de la izquierda es distinto del de la derecha.
 */

console.log(4 < 5);     // Respuesta true
console.log(4 <= 5);    // Respuesta true
console.log(4 > 5);     // Respuesta false
console.log(4 >= 5);    // Respuesta false
console.log(4 == 5);    // Respuesta false (compara que sean iguales pero no del mismo tipo)
console.log(4 === 5);   // Respuesta false (compara que sean iguales en valor y en tipo)
console.log(4 != 5);    // Respuesta true (compara que son distintos valores)

/**
 * Ejercicios Hoja 1.
 * Resolucion del 6 al 10.
 */

// Ejercicio 6
let v1 = 9;
let v2 = 3;
console.log(v1 % v2); // Devuelve 0 porque el resto entre 9 (v1) y 3 (v2) es 0 al ser exacta la division.

// Ejercicio 7
let v3 = 6;
v3 = v3 + 1;
console.log(v3); // Devuelve 7 al sumar 1 a lo que contenia v3 (6) y colocar el resultado en la propia v3
v3 += 1;
console.log(v3); // Exactamente igual pero por asignación compuesta

// Ejercicio 8
let base = 7;
let altura = 8; 
let resultado = (base * altura) / 2; // Devuelve 28 como resultado. Opera antes lo que está agrupado entre parentesis y luego resto de cosas
console.log(resultado);
console.log("El area de mi base y altura es: " + resultado);

// Ejercicio 9
// (0 °C × 9 / 5) + 32 = 32 °F          ----> copiado de Google
let gradosCelsius = 27;
let gradosFarenheit = (gradosCelsius * 9 / 5) + 32;
console.log(gradosFarenheit);
console.log(gradosCelsius + " grados Celsius son " + gradosFarenheit + " grados Farenheit");

// Ejercicio 10
let a = 6;
let b = 8;
let c = 15;
console.log("El promedio es: " + (a + b + c)/3);