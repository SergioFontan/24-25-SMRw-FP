/**
 * Hoy vemos isNaN() que evalua si un valor es un numero
 */
// let numero = parseFloat(prompt("Dame un dato"));
// console.log(numero);    // NaN si lo que introduzco es string

// console.log(0 / 0);     // NaN porque es una indeterminacion y nos sabe como ponerlo

/**
 * NaN es un valor especial en JavaScript que representa un numero INVALIDO
 * Normalmente este valor especial resulta de operaciones matematicas sin sentido (o solucion)
 * 
 * Ejemplo:
 * 0 / 0
 * parseInt("Hola no soy un numero")
 */

/**
 * isNaN evalua si un valor contiene el valor especial NaN o no pero tambien
 * CONVIERTE implicitamente el valor antes de realizar la operacion
 * 
 * isNaN(valor)
 * 
 * Posibles respuestas:
 * true: si el valor convertido es NaN
 * false: en cualquier otro caso
 */

console.log(isNaN(123));        // false porque es un numero
console.log(isNaN("123"));      // false porque aunque sea uns string, lo convierte antes de evaluar si es un number 
console.log(isNaN("abc"));      // true porque al convertirlo no es un numero válido
console.log(isNaN(true));       // true porque es un booleano
console.log(isNaN(false));      // true porque es un booleano

/**
 * CASOS INESPERADOS
 * isNaN(true) ---> me dice false porque internamente convierte true en 1
 * isNaN(false) --> me dice false porque internamente convierte false en 0
 * isNaN("")   ---> me dice false porque internamente convierte "" a 0
 * isNaN(" ")  ---> me dice false porque internamente convierte " " a 1
 */


/**
 * APLICACION DE ISNAN EN EL EJERCICIO 2 DE LA HOJA 20
 */
let precio = prompt("Introduce un precio");
let cantidad = prompt("Introduce una cantidad");

// Comprobamos primero que se puede hacer la operacion
if(isNaN(precio) || isNaN(cantidad)){
    alert("Has introducido un valor invalido");
}

// En este caso evaluamos que ambos son un numero correctos y que pueden operar
// if(!isNaN(precio) && !isNaN(cantidad)){
else{
    // Evaluo que alguno es negativo por lo que doy un mensaje
    if(precio <= 0 || cantidad <= 0){
        alert("ERROR: Estos numeros son negativos")
    }
    // Si son correctos y positivos puedo multiplicar
    // if(precio > 0 && cantidad > 0){
    else{
        // Si la cantidad es mayor a 10 aplico descuento
        if(cantidad > 10){
            let total = precio * cantidad; // Calculo total
            let descuento = total * 0.10;  // Calculo descuento
            // Aplico descuento al total
            alert(`El precio total es ${total - descuento}€`);
        }
        // En otro caso (no es mayor a 10) poner total
        else{
            alert(`El precio total es ${precio * cantidad}€`);
        }
    }
}
