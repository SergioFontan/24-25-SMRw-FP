// Ejercicio 5. 
let total = parseFloat(prompt("Introduce el total de la cuenta"));
let propina = parseFloat(prompt("Introduce PORCENTAJE de propina"));
let resultado = 0;

/**
 * Comprobar que los datos estan en rango:
 * 1. Comprobamos que la cuenta es POSITIVA (si es negativa, el restaurante te debe dinero)
 * 2. Comprobamos que el PORCENTAJE de la propina es está entre 0 y 100 
 */
if(total > 0 && propina >= 0 && propina <= 100){
    // Calcular resultado y mostrar en consola
    resultado = total + (total * (propina / 100));
    console.log(`La cuenta con ${total}€ y con propina ${propina}% tiene un total final de  ${resultado}€`);
}

// Damos mensaje en caso de haber error
if(total <= 0 || propina < 0 || propina > 100){
    alert("Has introducido algun dato mal");
}
