// Ejercicio 6. 
let precio = parseFloat(prompt("Introduce el precio del producto"));
let unidades = parseInt(prompt("Introduce unidades que quieres del producto"));
let descuento = parseFloat(prompt("Introduce el porcentaje de descuento"));
let resultado = 0;

/**
 * Realizamos comprobaciones
 * 1. Precio no puede ser negativo
 * 2. Descuento no puede ser menor que 0 ni mayor que 100
 * 3. Unidades no puede ser negativa, no compro -1 piruletas.
 */

if(precio > 0 && unidades > 0 && descuento >= 0 && descuento <= 100){
    /**
     * Calculo de resultado. Tenemos dos opciones:
     * 1. Hacemos el descuento sobre el precio final.
     * 2. Hacemos el descuento del producto antes de calcular resultado final.
     */

    // Elijo la opción 1
    resultado = (precio * unidades) - (precio * unidades)*(descuento / 100);
    console.log(`La el total de comprar ${unidades} unidades a ${precio}€ obtiene un total de ${unidades * precio} al que aplicando un descuento de ${descuento}% queda un total de ${resultado}€`);

}

// Damos mensaje en caso de haber error
if(precio <= 0 || unidades <= 0 || descuento < 0 || descuento > 100){
    alert("Has introducido algun dato mal");
}