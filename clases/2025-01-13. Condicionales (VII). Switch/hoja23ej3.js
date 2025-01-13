/**
 * Hoja 23. Enunciado 3
 */

/**
 * PLANTEAMIENTO
 * 
 * - 3 posibles destinos (¿prompt?)
 * - 3 posibles precios (¿valores constantes?)
 * - ¿Hay rangos que evaluar?
 */

let destino = prompt("Introduce destino del paquet (Local, Nacional, Internacional");

// Variables con las que operamos
const precioTotal = 0;
const peso = 0;

// Constantes con valores fijos
const PRECIO_LOCAL = 5;
const PRECIO_NACIONAL = 10;
const PRECIO_INTERNACIONAL = 20;
const PESO_MINIMO = 0.1;
const PESO_MAXIMO = 50;

switch (destino) {
    case "Local":
        peso = parseFloat(prompt("Introduce peso"));
        if(peso >= PESO_MINIMO && peso <= PESO_MAXIMO){
            precioTotal = peso * PRECIO_LOCAL;
            alert(`El precio total de un envío LOCAL de ${peso} kg es ${precioTotal}`);
        }else if (peso > PESO_MAXIMO){
            alert("ERROR: peso maximo alcanzado");
        }else{
            alert("ERROR: valor introducido no válido.");
        }
        break;

    case "Nacional":
        peso = parseFloat(prompt("Introduce peso"));
        if(peso >= PESO_MINIMO && peso <= PESO_MAXIMO){
            precioTotal = peso * PRECIO_NACIONAL;
            alert(`El precio total de un envío NACIONAL de ${peso} kg es ${precioTotal}`);
        }else if (peso > PESO_MAXIMO){
            alert("ERROR: peso maximo alcanzado");
        }else{
            alert("ERROR: valor introducido no válido.");
        }
        break;

    case "Internacional":
        peso = parseFloat(prompt("Introduce peso"));
        if(peso >= PESO_MINIMO && peso <= PESO_MAXIMO){
            precioTotal = peso * PRECIO_INTERNACIONAL;
            alert(`El precio total de un envío INTERNACIONAL de ${peso} kg es ${precioTotal}`);
        }else if (peso > PESO_MAXIMO){
            alert("ERROR: peso maximo alcanzado");
        }else{
            alert("ERROR: valor introducido no válido.");
        }
        break;

    default:
        alert("ERROR: producto no disponible");
        break;
}