/**
 * Ejercicio 01.
 */
// numeros01.length -----> el total de valores
let numeros01 = [3, 7, 2, 9, 5];
for(let i = 0; i < numeros01.length; i++){
    console.log(numeros01[i]);
}

/**
 * Ejercicio 02.
 */
let masGrande = 0; // Inicializo en 0 por ser mas pequeño que el resto
let numeros02 = [10, 103, 25, 7, 99, 64, 100];
for(let i = 0; i < numeros02.length; i++){
    if(numeros02[i] > masGrande){
        masGrande = numeros02[i];
    }
}
console.log(`El mas grande es ${masGrande}`);

/**
 * Ejercicio 03.
 */
let sonPares = 0; // Inicializo en 0 porque no tengo ningun par
let numeros03 = [4, 9, 12, 15, 18, 25, 26, 44, 57];
for(let i = 0; i < numeros03.length; i++){
    // Si el numero es par, su resto es 0
    if(numeros03[i] % 2 === 0){
        sonPares++;
        // sonPares = sonPares + 1;
    }
}
console.log(`Hay un total de ${sonPares} numeros pares`);

/**
 * Ejercicio 04.
 */
let numeros04 = [5, 8, 3, 10];
let sumaTotal = 0; // Aqui almaceno toda la suma de numeros
// Si sale bien, sumaTotal deberia acabar con 26 de valor
for(let i = 0; i < numeros04.length; i++){
    // sumaTotal = sumaTotal + numeros04[i];
    sumaTotal += numeros04[i];
}
console.log(`El total sumado es ${sumaTotal}`);

/**
 * Ejercicio 05
 */
let numeros05 = [3, 7, -2, 9, -5];
let contadorNegativos = 0; // Empiezo en 0 porque no he encontrado ninguno antes de empezar
for(let i = 0; i < numeros05.length; i++){
    // Si encuentro un numero negativo, sumo 1 a contadorNegativos
    if(numeros05[i] < 0){
        contadorNegativos++;
        // contadorNegativos = contadorNegativos + 1;

        // Cuando tengo solo 1 negativo encontrado, lo pinto
        if(contadorNegativos == 1){
            console.log(`He encontrado el primer negativo y es ${numeros05[i]}`)
        }
    }
}

/**
 * Ejercicio 06
 */
let numeros06 = [2, 5, 7, 10];
for(let i = 0; i < numeros06.length; i++){
    console.log(`El doble de ${numeros06[i]} es ${numeros06[i] * 2}`)
    // numeros06[i] = numeros06[i] * 2;
}

/**
 * Ejercicio 07
 */
let numeros07 = [4, 11, 9, 21, 15];
for(let i = 0; i < numeros07.length; i++){
    if(numeros07[i] > 10){
        console.log(`El numero ${numeros07[i]} es mayor que 10`);
    }
}

/**
 * Ejercicio 08
 */
const numeroBuscar = 10;
let encontrado = false; // Lo pongo en false porque no lo encuentro
let numeros08 = [5, 8, 12, 3, 7];
for(let i = 0; i < numeros08.length; i++){
    if(numeros08[i] === numeroBuscar){
        encontrado = true;
        // console.log(`Se ha encontrado el numero ${numeros08[i]} en la posicion ${i}`)
    }
}
// Si lo he encontrado, la bandera estará en true.
if(encontrado == true){
    console.log(`Si lo he encontrado`);
}else{
    console.log(`No lo he encontrado`);
}

/**
 * Ejercicio 09
 */
const umbral = 20;
let contadorUmbral = 0;
let numeros09 = [6, 18, 22, 4, 10];
for(let i = 0; i < numeros09.length; i++){
    if(numeros09[i] > umbral){
        contadorUmbral++;
    }
}
console.log(`He encontrado un total de ${contadorUmbral} mayor al umbral ${umbral}`);

/**
 * Ejercicio 10
 */
let numeros10 = [1, 2, 3, 4, 5];
for(let i = numeros10.length - 1; i >= 0; i--){
    console.log(numeros10[i]);
}