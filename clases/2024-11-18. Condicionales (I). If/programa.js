/**
 * Crea un programa que pida al usuario una nota y 
 * muestre una respuesta solo si es un suspenso
 */
let nota = parseFloat(prompt("Introduce una nota"));
if(nota < 5 && nota >= 0){
    console.log("Has suspendido con un " + nota);
    alert("Has suspendido con un " + nota);
}

// Para ver si es un sobresaliente
if(nota >= 9 && nota <= 10){
    console.log("Has sacado un sobresaliente: " + nota);
    alert("Has sacado un sobresaliente: " + nota);
}

// Ejercicio: verificar si es un notable
if(nota >= 7 && nota < 9){
    console.log("Has sacado un notable: " + nota);
    alert("Has sacado un notable: " + nota);
}

// Ejercicio: verificar si es un bien
if(nota >= 6 && nota < 7){
    console.log("Has sacado un bien: " + nota);
    alert("Has sacado un bien: " + nota);
}