// Ejercicio 01
// for(let i = 1; i < 11; i++){
//     console.log(i);
// }

let i = 1;
while(i < 11){
    console.log(i);
    i++;
}

// Ejercicio 02
let sumaTotal = 0;
i = 1;
while(sumaTotal <= 50){
    sumaTotal += i;
    i++;
}

// Ejercicio 03
/**
 * La condicion es que el numero SOLICITADO AL USUARIO (prompt)
 * debe ser menor que 100
 * 
 * PASOS:
 * pido numero
 * evaluo en bucle
 * solicitar numero de nuevo o salir del bucle
 */
let numeroUsuario = parseInt(prompt("Introduce un numero mayor a 100"));
const MAXIMO = 100;
while(numeroUsuario <= MAXIMO){
    numeroUsuario = parseInt(prompt("ERROR. Asegurate de introducir un numero mayor a 100"));
}

// Ejercicio 04
// La condicion es que el ACUMULADO sea menor a 1000
let total04 = 1;
let num04 = 1;
const NUMERO_MAXIMO_EJ04 = 1000;
while(total04 <= NUMERO_MAXIMO_EJ04){
    total04 = total04 * num04;
    num04++;
}
console.log(`Total es ${total04}`);

// Ejercicio 05
/**
 * Creamos un array con 4 numeros.
 * Recorremos con while ---> CONDICION el final es menor a 4
 * Contamos cuantos de esos son positivos (variable contador)
 */
const TOTAL_NUMEROS_CONTAR = 
    parseInt(prompt("Dime cuantos numeros vas a contar"));
let totalPositivos = 0;
let contador = 1;
if(TOTAL_NUMEROS_CONTAR > 0){
    while(contador <= TOTAL_NUMEROS_CONTAR){
        let n = parseInt(prompt(`Comprobación ${contador}:
            Introduce un numero`));
        if(n > 0){
            totalPositivos++;
        }
        contador++;
    }
    console.log(`Hay un total de ${totalPositivos} numeros positivos`);
}else{
    console.log("Has escogido un valor incorrecto");
}

// Ejercicio 06
/**
 * Condicion es que isNaN del numero que pido al usuario sea 
 * distinto de true.
 * 
 * isNaN(5)         ---> false porque SI es un numero
 * isNaN('sergio')  ---> true porque NO es un numero
 */
let password = prompt("Introduce contraseña numerica");
while(isNaN(password) == true){
    password = prompt("ERROR. No es un numero");
}


// Ejercicio 07
/**
 * La condicion es que haya encontrado 5 multiplos de 3
 * Debo tener una variable contador que sume cada vez que un
 * numero es multiplo de 3.
 * Mientras la variable sea menor a 6, realiza tarea
 */
