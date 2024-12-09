/**
 * Crear un programa que te diga tu nota en texto 
 * en función de los rangos de calificaciones
 */

let nota = prompt("Introduce una nota");

// Este valor válido
if(isNaN(nota)){
    alert("NO HAS INTRODUCIDO UNA NOTA VALIDA");
}
// En otro quiere decir que la nota es un numero
else{
    //Aqui evaluamos los casos con rango incorrecto
    if(nota < 0 || nota > 10){
        alert("Estas fuera de rango con la nota");
    }
    // Aqui ya estamos dentro de rango. Nos hemos quitado notas negativas o superiores a 10
    else{
        // Caso en el que suspendo
        if(nota < 5){
            alert("RESULTADO: insuficiente");
        }
        // Caso en que estoy aprobado
        else if(nota < 7){
            alert("RESULTADO: aprobado");
        }
        // Caso de notable
        else if (nota < 9){
            alert("RESULTADO: notable");
        }
        // Sobresaliente es lo que queda
        else{
            alert("RESULTADO: sobresaliente");
        }
    }
}