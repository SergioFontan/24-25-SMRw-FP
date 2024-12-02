// Ejercicio 9. 
let temperatura = parseFloat(prompt("Introduce una temperatura"));
let temperaturaMaxima = parseFloat(prompt("Introduce la temperatura maxima"));

/**
 * Comprobaciones:
 * 1. ¿Se permite temperatura negativa? Si, podría ser perfectamente.
 * 2. No hay mas comprobaciones ni casos especiales.
 */
console.log(`La temperatura actual es de ${temperatura}ºC`);
console.log(`La temperatura maxima esperada es de ${temperaturaMaxima}ºC`);

if(temperatura > temperaturaMaxima){
    console.log(`Se puede afirmar que se ha superado la temperatura maxima`);
}

if(temperatura <= temperaturaMaxima){
    console.log(`Se puede afirmar que NO se ha superado la temperatura maxima`);
}

