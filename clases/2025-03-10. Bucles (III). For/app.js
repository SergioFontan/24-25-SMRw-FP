// Ejercicio 01
for(let i = 1; i < 11; i++){
    console.log(i);
}

// Ejercicio 02
for(let i = 10; i >= 1; i--){
    console.log(i);
}

// Ejercicio 03
// OPCION A. Avanzando de 1 en 1
for(let i = 1 ; i <= 20 ; i++){
    // Si el resto es cero, es par
    if(i % 2 == 0){
        console.log(i);
    }
}

// OPCION B. Avanzando de 2 en 2
for(let i = 2; i <= 20; i = i + 2){
    console.log(i);
}

// Ejercicio 04
let total = 0;
for(let i = 1 ; i <= 10; i++){
    console.log(`Total se actualiza con el valor ${total + i} al suma ${total} + ${i}`);
    total = total + i;
    
}
console.log("**************************");
console.log(total);

// Ejercicio 05
for(let i = 1; i <= 10; i++){
    console.log(`5 x ${i} = ${5 * i}`);
}

// Ejercicio 06
// OPCION A. Sumo de 2 en 2
for (let i = 1; i <= 15; i = i + 2){
    console.log(i);
}

// OPCION B. Sumo de 1 en 1 
for(i = 1; i <= 15; i++){
    // Compruebo que es impar (resto distinto de 2 al dividir entre 2)
    if(i % 2 != 0){
        console.log(i);
    }
}

// Ejercicio 07
// Es exactamente el mismo que el 2, contar desde 10 hasta 0
for(let i = 10; i >= 0; i--){
    console.log(i);
}

// Ejercicio 08
// Inicializo en 1 porque al ser multiplicación, si lo inicializo en 0, siempre resultaría 0 como resultado.
let acumulado = 1; 
for(let i = 1; i <= 5; i++){
    console.log(`acumulado tiene ${acumulado * i} multiplicando ${acumulado} x ${i}`);
    acumulado = acumulado * i;
}
console.log(`El total es ${acumulado}`);

// Ejercicio 09
for(let i = 0; i < 10; i++){
    console.log("Hola mundo");
}

// Ejercicio 10
// CON FOR NO PUEDO PORQUE NO CONOZCO EL NUMERO DE OPERACIONES