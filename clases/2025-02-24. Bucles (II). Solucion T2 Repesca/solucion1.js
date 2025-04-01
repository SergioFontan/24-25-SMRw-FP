// 1. Crear el array con las calificaciones
let calificaciones = [null, 8, 3, null];

// 2. Pedimos al usuario una calificación mediante prompt
let calificacionUsuario = prompt('Introduce una calificación entera.');

/**
 * Posibilidades de la calificación
 * - No hay datos introducidos
 * - El dato introducido no es un número
 * - Se han introducido datos y existe dentro del array calificaciones. Devuelvo el número de posición
 * - Se han introducido datos y no existe dentro del array calificaciones
 * 
 * Podemos usar if-else if-else puesto que tenemos 4 caminos distintos
 */

// 3. Comprobamos que el usuario haya introducido algo
if(calificacionUsuario.length == 0){
    alert("ERROR: no se han introducido datos");
}
// 4. Comprobamos que la calificación sea un número
else if(isNaN(calificacionUsuario)){
    alert("ERROR: el dato introducido no es un número");
}
// En otro caso, sí es una calificación. Comprobamos contenido
else if(calificacionUsuario == calificaciones[0]){
    alert(`La calificación ${calificacionUsuario} está en la posición 0`);
}
else if(calificacionUsuario == calificaciones[1]){
    alert(`La calificación ${calificacionUsuario} está en la posición 1`);
}
else if(calificacionUsuario == calificaciones[2]){
    alert(`La calificación ${calificacionUsuario} está en la posición 2`);
}
else if(calificacionUsuario == calificaciones[3]){
    alert(`La calificación ${calificacionUsuario} está en la posición 3`);
}
// 5. Hemos comprobado todas las posiciones y sus contenidos y no está.
// Mandamos un mensaje de que no está en el array (aunque la longitud sí sea correcta y sea un número)
else{
    alert(`La calificación ${calificacionUsuario} no corresponde a ninguna dentro del array`);
}

