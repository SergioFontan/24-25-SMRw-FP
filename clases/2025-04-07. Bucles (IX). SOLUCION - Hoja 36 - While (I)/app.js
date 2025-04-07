/**
 * Ejercicios hoja 36
 */
// Ej01
/**
 * Estrategia utilizada:
 * - No es necesaria ninguna estrategia
 */
i = 1;
while(i <= 10){
    console.log(i);
    i++;
}

// Ej02
/**
 * Estrategia utilizada:
 * - variable auxiliar para acumular la suma de todos los valores (contenido de i + total)
 */
i = 1;
let total = 0;
while(total <= 50){
    console.log(`i ahora vale ${i}`);
    console.log(`total antes de suma ${total}`);
    total = total + i;
    console.log(`total despues de suma ${total}`);
    console.log(`*********************************`);
    i++;
}
console.log(total);

// Ej03
/**
 * Estrategia utilizada:
 * - variable auxiliar que cambia de valor si no cumple con la condición
 */
let numeroUsuario = parseInt(prompt("intoduce un numero mayor a 100"));
while(numeroUsuario <= 100){
    numeroUsuario = parseInt(prompt("ERROR: el numero introducido es menor a 100. Prueba otra vez"));
}

// Ej04
/**
 * Estrategia utilizada:
 * - variable auxiliar para acumular el producto resultado de i y de totalProducto
 */
i = 1;
let totalProducto = 1;
while(totalProducto <= 1000){
    console.log(`i ahora vale ${i}`);
    console.log(`totalProducto antes de suma ${totalProducto}`);
    totalProducto = totalProducto * i;
    console.log(`totalProducto despues de suma ${totalProducto}`);
    console.log(`*********************************`);
    i++;
}
console.log(`totalProducto despues de suma ${totalProducto}`);

// Ej05
/**
 * Estrategia utilizada:
 * - variable auxiliar para contar de 1 en 1 los que sean positivos
 * - recorrer todo el array (usar length)
 */
numeros = [3,-2,7,-2,1,9,-7,-5,6,-2,2,-10,9,-5,2,-6];
i = 1;
let contadorPositivos = 0;
while(i < numeros.length){
    if(numeros[i] < 0){
        contadorPositivos++;
    }
    i++;
}

// Ej06
/**
 * Estrategia utilizada:
 * - Solicitar numero al usuario y guardarlo en variable.
 * - Para saber que es numero, debe ser != de isNaN()
 */
let password = prompt("Introduce una contraseña numérica");
while(isNaN(password) == true){
    password = prompt("ERROR: no es un número. Introduce una contraseña numérica");
}

// Ej07
/**
 * Estrategia utilizada:
 * - Variable auxiliar para contar cuantos multiplos me encuentro
 */
i = 1;
let contadorMultiplos3 = 0;
while(contadorMultiplos3 < 3){
    // Es múltiplo de 3 cuanto su resto es 0
    if(i % 3 == 0){
        contadorMultiplos3++;
        console.log(`El número ${i} es múltiplo de 3`);
    }
    i++;
}

// Ej08
/**
 * Estrategia utilizada:
 * - Solicitar continuamente al usuario un valor hasta que sea impar.
 */
let usuarioImpar = parseInt(prompt("Introduce un valor impar"));
// Compruebo que al dividirlo entre 2 sea distinto de 1 el resto
while(usuarioImpar % 2 != 1){
    usuarioImpar = parseInt(prompt("ERROR: no es un valor impar. Introduce un valor impar"));
}

// Ej09
/**
 * Estrategia utilizada:
 * - Ninguna variable auxiliar.
 * - Ningún valor solicitado al usuario.
 * - Elegir dónde empieza la i ya que el final lo conozco y es 0
 */
i = 5;
// Mientras i sea mayor que 0, hacer la tarea
while(i >= 0){
    console.log(`Valor actual: ${i}`);
    i--;
}

// Ej10
/**
 * Estrategia utilizada:
 * - Solicitar valor al usuario.
 * - Mientras no sea EXACTAMENTE 0, sigo solicitando.
 */
let numeroCero = parseInt(prompt("Introduce el número 0"));
// Mientras sea DISTINTO de 0, repite la solicitud de número
while(numeroCero != 0){
    numeroCero = parseInt(prompt("ERROR. No es un cero. Introduce el número 0"));
}