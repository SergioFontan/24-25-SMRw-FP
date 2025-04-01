/**
 * GRUPO 01
 */
let encontrado = 0;
// Esta opcion aumenta de 1 en 1 (hace 18 iteraciones)
for(let i = 12; i < 30; i++){
    if(i % 5 == 0){
        encontrado++;
        // encontrado = encontrado + 1;
    }
    if(i % 5 == 0 && encontrado == 3){
        alert(`El tercer multiplo de 5 es ${i} entre 12 y 30`)
    }
}

// Esta opcion aumenta de 5 en 5 (hace 3 iteraciones)
encontrado = 0;
for(let i = 15; i < 30; i = i + 5){
    encontrado++;
    if(encontrado == 3){
        alert(`El tercer multiplo de 5 es ${i} entre 12 y 30`)
    }
}

/**
 * GRUPO 02
 */
// Esta opcion aumenta de 1 en 1
encontrado = 0;
for(let i = 13; i < 29; i++){
    // Si son multiplos de 2 y de 3
    if(i % 2 == 0 && i % 3 == 0){
        encontrado++;
        // encontrado = encontrado + 1;
    }
    if(i % 2 == 0 && i % 3 == 0 && encontrado == 2){
        alert(`El segundo multiplo de 2 y de 3 es ${i} entre 13 y 29`);
    }
}

encontrado = 0;
for(let i = 12; i < 29; i = i + 6){   
    encontrado++;
    if(encontrado == 2){
        alert(`El segundo multiplo de 2 y de 3 es ${i} entre 13 y 29`);
    }
}