/**
 * Hoja 23. Enunciado 1.
 * 
 * PLANTEAMIENTO.
 * En este caso el planteamiento para resolver el ejercicio será distinto.
 * Se dará un "menú" al usuario para que eliga con numeración en vez de tener que escribir texto.
 * De esta manera, evitaremos posibles fallos derivados de caracteres conflictivos o "extra".
 */

let tipo = prompt(`Introduce el tipo de habitación:
    1 - Suite Estándar
    2 - Suite Ejecutiva
    3 - Suite Presidencial`);

// Variables con las que posteriormente operamos
let precioTotal = 0;
let numeroNoches = 0;

// Constantes para facilitar lectura de código.
const PRECIO_ESTANDAR = 100;
const PRECIO_EJECUTIVA = 150;
const PRECIO_PRESIDENCIAL = 300;
const MINIMO_NOCHES = 1;
const MAXIMO_NOCHES = 5;

switch (tipo) {
    // Caso ESTANDAR
    case 1:
        numeroNoches = parseInt(prompt("Introduce el número de noches"));
        if(numeroNoches >= MINIMO_NOCHES && numeroNoches <= MAXIMO_NOCHES){
            precioTotal = numeroNoches * PRECIO_ESTANDAR;
            alert(`El precio total de suite ESTANDAR en ${numeroNoches} noches es ${precioTotal}`);
        }else if(numeroNoches > MAXIMO_NOCHES || numeroNoches < MINIMO_NOCHES){
            alert("ERROR: fuera del rango pedido");
        }else{
            alert("ERROR: valor incorrecto");
        }
        
        break;

    // Caso EJECUTIVA
    case 2:
        numeroNoches = parseInt(prompt("Introduce el número de noches"));
        if(numeroNoches >= MINIMO_NOCHES && numeroNoches <= MAXIMO_NOCHES){
            precioTotal = numeroNoches * PRECIO_EJECUTIVA;
            alert(`El precio total de suite EJECUTIVA en ${numeroNoches} noches es ${precioTotal}`);
        }else if(numeroNoches > MAXIMO_NOCHES || numeroNoches < MINIMO_NOCHES){
            alert("ERROR: fuera del rango pedido");
        }else{
            alert("ERROR: valor incorrecto");
        }
        break;

    // Caso PRESIDENCIAL
    case 3:
        numeroNoches = parseInt(prompt("Introduce el número de noches"));
        if(numeroNoches >= MINIMO_NOCHES && numeroNoches <= MAXIMO_NOCHES){
            precioTotal = numeroNoches * PRECIO_PRESIDENCIAL;
            alert(`El precio total de suite PRESIDENCIAL en ${numeroNoches} noches es ${precioTotal}`);
        }else if(numeroNoches > MAXIMO_NOCHES || numeroNoches < MINIMO_NOCHES){
            alert("ERROR: fuera del rango pedido");
        }else{
            alert("ERROR: valor incorrecto");
        }
        break;

    default:
        alert("ERROR: tipo no disponible.");
        break;
}