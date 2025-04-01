// Ejercicio 7. 
let num1 = parseFloat(prompt("Introduce el numero 1"));
let num2 = parseFloat(prompt("Introduce el numero 2"));
let num3 = parseFloat(prompt("Introduce el numero 3"));

/**
 * Comprobaciones.
 * 1. En este caso se comparan mayores y menores. No hay rangos como en otros ejercicios
 */

// CASO A: num1 es EL MAYOR
if(num1 > num2 && num1 > num3){
    // Comprobar si el mas pequeño es num2 o num3
    // En este caso seria num1 el mayor y num2 el pequeño
    if(num2 < num3){
        console.log(`El numero mayor es ${num1} y el mas pequeño es ${num2}`);
    }
    // En este caso seria num1 el mayor y num3 el pequeño
    if(num3 < num2){
        console.log(`El numero mayor es ${num1} y el mas pequeño es ${num3}`);
    }
}

// CASO B: num2 es EL MAYOR
if(num2 > num1 && num2 > num3){
    // Comprobar si el mas pequeño es num1 o num3
    // En este caso seria num2 el mayor y num1 el pequeño
    if(num1 < num3){
        console.log(`El numero mayor es ${num2} y el mas pequeño es ${num1}`);
    }
    // En este caso seria num2 el mayor y num3 el pequeño
    if(num3 < num1){
        console.log(`El numero mayor es ${num2} y el mas pequeño es ${num3}`);
    }
}

// CASO C: num3 es EL MAYOR
if(num3 > num1 && num3 > num2){
    // Comprobar si el mas pequeño es num1 o num2
    // En este caso seria num3 el mayor y num1 el pequeño
    if(num1 < num2){
        console.log(`El numero mayor es ${num3} y el mas pequeño es ${num1}`);
    }
    // En este caso seria num3 el mayor y num2 el pequeño
    if(num2 < num1){
        console.log(`El numero mayor es ${num1} y el mas pequeño es ${num2}`);
    }
}