// Ejercicio 01

let origen = prompt("Moneda de origen");
let destino = prompt("Moneda de destino");

const euroADolar = 1.05; 
const dolarAEuro = 0.95;

// Si el origen es euro y quiero cambiar a dolar
if(origen == "euro" && destino == "dolar"){
    let valor = parseFloat(prompt("Introduce un valor")); 
    let resultado = valor * euroADolar;
    alert("El resultado es " + resultado);
}
if(origen == "dolar" && destino == "euro"){
    let valor = parseFloat(prompt("Introduce un valor"));
    let resultado = valor * dolarAEuro;
    alert("El resultado es " + resultado);
}
if(origen == destino){
    alert("No puedes convertir de una moneda a la misma");
}

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

// Ejercicio 03.

// PASO 1. Pedir datos
let edadPersona = parseInt(prompt("Introduce la edad de la persona invitada"));
let restriccion = parseInt(prompt("Introduce la restriccion de la invitación"));

// Paso 2. Comprobar que los datos tienen sentido
if(edadPersona < 0 || restriccion < 0){
    alert("Datos incorrectos");
}

// Paso 3. Comprobar que es mayor
if((edadPersona >= 0) && (restriccion > 0) && (edadPersona >= restriccion)){
    console.log(`Entra al tener ${edadPersona} y ser mayor a la restriccion de ${restriccion} años`);
}

// Paso 4. Comprobar que no puede entrar
if((edadPersona >= 0) && (restriccion > 0) && (edadPersona < restriccion)){
    console.log(`No puede entrar al tener ${edadPersona} y ser menor a la restriccion de ${restriccion} años`);
}


// Ejercicio 04.

// PASO 1. Pedir datos
let altura = parseInt(prompt("Introduce la altura (en m)"));
let peso = parseInt(prompt("Introduce el peso (en kg)"));
let imc = 0;

// Paso 2. Aplicamos la fórmula del IMC: peso (kg) / [estatura (m)]2
// Comprobamos si los datos no son correctos
if(altura < 0 || peso < 0){
    alert("Error en los datos");
}

// Altura y peso como 0 no tiene sentido
if(altura > 0 && peso > 0){
    imc = peso /(altura * altura);
}

// Comprobación que nos pide 
if(resultado > 18.5 && resultado < 24.5){
    alert("Saludable");
}

// Ejercicio 5. (PLANTEADO)
let total = parseFloat(prompt("Introduce el total de la cuenta"));
let propina = parseFloat(prompt("Introduce cuanta propina le dejas"));

// Comprobar que los datos estan en rango 

// Calcular resultado y mostrar en consola
