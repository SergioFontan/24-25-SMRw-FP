/**
 * Hoja 23. Enunciado 2.
 */

// Solicito el producto al usuario
let producto = prompt("¿Que producto desea comprar?");

// Variables auxiliares creadas para el proceso de compra
let cantidad = 0;
let precioTotal = 0;

// Valores constantes para mejorar la lectura
const PRECIO_TABLET = 500;
const PRECIO_MOVIL = 700;
const PRECIO_PORTATIL = 1200;
const CANTIDAD_MINIMA = 1;
const CANTIDAD_MAXIMA = 10;

// Evaluo el producto elegido
switch (producto) {
    case "Teléfono móvil":
        cantidad = parseInt(prompt("Indica la cantidad"));
        if(cantidad >= CANTIDAD_MINIMA && cantidad <= CANTIDAD_MAXIMA){
            // SE PUEDE COMPRAR
            precioTotal = PRECIO_MOVIL * cantidad;
            alert(`El coste precioTotal de comprar ${cantidad} tablets es ${precioTotal}`);
        }else if(cantidad > 10){
            alert("ERROR: no hay stock");
        }else{
            alert("ERROR: valor introducido no válido");
        }
        break;

    case "Portátil":
        cantidad = parseInt(prompt("Indica la cantidad"));
        if(cantidad >= CANTIDAD_MINIMA && cantidad <= CANTIDAD_MAXIMA){
            // SE PUEDE COMPRAR
            precioTotal = PRECIO_PORTATIL * cantidad;
            alert(`El coste precioTotal de comprar ${cantidad} tablets es ${precioTotal}`);
        }else if(cantidad > 10){
            alert("ERROR: no hay stock");
        }else{
            alert("ERROR: valor introducido no válido");
        }
        break;

    case "Tablet":
        cantidad = parseInt(prompt("Indica la cantidad"));
        if(cantidad >= CANTIDAD_MINIMA && cantidad <= CANTIDAD_MAXIMA){
            // SE PUEDE COMPRAR
            precioTotal = PRECIO_TABLET * cantidad;
            alert(`El coste total de comprar ${cantidad} tablets es ${precioTotal}`);
        }else if(cantidad > 10){
            alert("ERROR: no hay stock");
        }else{
            alert("ERROR: valor introducido no válido");
        }
        break;

    default:
        alert("ERROR: producto no disponible.");
        break;
}