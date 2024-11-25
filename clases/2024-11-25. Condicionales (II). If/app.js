// Ejercicio 01

// let origen = prompt("Moneda de origen");
// let destino = prompt("Moneda de destino");

// const euroADolar = 1.05; 
// const dolarAEuro = 0.95;

// // Si el origen es euro y quiero cambiar a dolar
// if(origen == "euro" && destino == "dolar"){
//     let valor = parseFloat(prompt("Introduce un valor")); 
//     let resultado = valor * euroADolar;
//     alert("El resultado es " + resultado);
// }
// if(origen == "dolar" && destino == "euro"){
//     let valor = parseFloat(prompt("Introduce un valor"));
//     let resultado = valor * dolarAEuro;
//     alert("El resultado es " + resultado);
// }
// if(origen == destino){
//     alert("No puedes convertir de una moneda a la misma");
// }

// Ejercicio 02

// Paso 1. Pido los numeros (en formato number)
let num1 = parseFloat(prompt("Primera nota"));
let num2 = parseFloat(prompt("Segunda nota"));
let num3 = parseFloat(prompt("Tercera nota"));

// Paso 2. Comprobar si estan en rango (entre 0 y 10 puntos)
if((num1 >= 0 && num1 <= 10) && (num2 >= 0 && num2 <= 10) && (num3 >= 0 && num3 <= 10)){
    let resultado = (num1 + num2 + num3) / 3;
    console.log(`El promedio de ${num1}, ${num2} y ${num3} es ${resultado}`);
}
