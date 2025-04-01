let calificaciones = [3, 4, 9, 10, 7, 8, 9, 1, 2]; 
// console.log(calificaciones.length);

// Ej01. Pinta en consola todas las calificaciones de 1 en 1
for(let i = 0; i < calificaciones.length; i++){
    console.log(calificaciones[i]);
}

// Ej02. Pinta en consola todas las calificaciones APROBADAS
for(let i = 0; i < calificaciones.length; i++){
    if(calificaciones[i] >= 5){
        console.log(`Aprobado con un ${calificaciones[i]}`)
    }
}

// Ej03. Suma todas las calificaciones en una variable total
//       Imprime en consola el resultado final
let total = 0;
for(let i = 0; i < calificaciones.length; i++){
    // total += calificaciones[i];
    total = total + calificaciones[i];
}
console.log(`El total de las calificaciones es ${total}`);


// Ej04. Suma todas las calificaciones aprobadas en una variable llamadas totalAprobadas
//       Imprime en consola el resultado final.
let totalAprobadas = 0;
for(let i = 0; i < calificaciones.length; i++){
    // Compruebo si esta aprobada para sumar en totalAprobadas un 1
    if(calificaciones[i] >= 5){
        totalAprobadas++;
    }
}
console.log(`Hay un total de ${totalAprobadas} calificaciones aprobadas`);


let estudiantes = ["Lola", null, "Pepe", "Laura", null, "Juan"];

// Ej05. Imprime en consola los nombres del array estudiantes.
//       NOTA: comprobar si hay contenido antes de imprimir.
for(let i = 0; i < estudiantes.length; i++){
    // Compruebo que el contenido de estudiantes en la posición i no es null
    if(estudiantes[i] != null){
        console.log(estudiantes[i]);
    }
}

// Ej06. Imprime en consola cuantos nombres hay en el array estudiantes.
//       NOTA: comprobar si hay contenido antes de imprimir
let totalEstudiantes = 0;
for(let i = 0; i < estudiantes.length; i++){
    // Compruebo que el contenido de estudiantes en la posicion i no es null para poder sumar a totalEstudiantes
    if(estudiantes[i] != null){
        totalEstudiantes++;
    }
}
console.log(`Hay un total de ${totalEstudiantes} estudiantes.`);

// Ej07. Imprime en consola los nombres con más de 5 caracteres
//       NOTA: comprobar si hay contenido antes de imprimir
let totalEstudiantesCaracteres = 0;
for(let i = 0; i < estudiantes.length; i++){

}

// Ej08. Imprime en consola cuantos nombres hay con más de 5 caracteres.
//       NOTA: comprobar si hay contenido antes de imprimir
for(let i = 0; i < estudiantes.length; i++){

}