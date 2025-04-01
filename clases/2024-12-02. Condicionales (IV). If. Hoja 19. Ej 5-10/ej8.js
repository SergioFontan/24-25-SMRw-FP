// Ejercicio 8. 
let year = parseInt(prompt("Introduce el año"));

/**
 * Aclaración:
 * Un año es bisiesto en el calendario Gregoriano, si:
 * 1. Es divisible entre 4 
 * 2. No divisible entre 100, 
 * 3. Es divisible entre 400
 * 
 * FUENTE CONSULTADA: 
 * https://es.wikibooks.org/wiki/Algoritmo_bisiesto
 */

if(year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)){
    console.log(`El año ${year} es bisiesto`);
    // console.log('El año' + year + 'es bisiesto'); // Esta línea es igual que la anterior.

}

if(year % 4 != 0 || (year % 100 == 0 && year % 400 != 0)){
    console.log(`El año ${year} no es bisiesto`);
}