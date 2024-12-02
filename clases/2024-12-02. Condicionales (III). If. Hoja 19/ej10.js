// Ejercicio 10
let horasTrabajadas = parseInt(prompt("Introduce el numero de horas trabajadas"));
let euroPorHora = parseFloat(prompt("Introduce el precio por hora"));

/**
 * Comprobaciones:
 * 1. Trabajar horas NEGATIVAS no tiene sentido.
 * 2. Cobrar precio NEGATIVO por hora no tiene sentido.
 * 3. No existen rangos que comprobar
 */

if(horasTrabajadas > 0 && euroPorHora > 0){
    console.log(`Se han trabajado ${horasTrabajadas}h a un precio de ${euroPorHora}€ con un coste total de ${horasTrabajadas * euroPorHora}€`)
}

if(horasTrabajadas < 0 || euroPorHora < 0){
    console.log("Los datos NO son correctos");
}