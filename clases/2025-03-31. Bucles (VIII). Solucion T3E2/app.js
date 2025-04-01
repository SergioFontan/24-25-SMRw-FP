// Array inicial con las calificaciones
let calificaciones = [3, 2, 7, 2, 1, 9, 7, 5, 6, 2, 2, 10, 9, 5, 2, 6];

/**
 * Variables auxiliares
 * contadorAprobadas: contiene cuantas veces ha encontrado una calificación aprobada
 * totalSuspensos: contiene cuantos suspensos existen en el array
 */
let contadorAprobadas = 0;
let totalSuspensos = 0;

// Bucle FOR para recorrer todas las calificaciones
for(let i = 0; i < calificaciones.length; i++){
    if(calificaciones[i] >= 5){
        contadorAprobadas++;
        if(contadorAprobadas == 3){
            console.log(`La tercera calificación aprobada es ${calificaciones[i]}`);
        }
    }else{
        totalSuspensos++;
    }
}
console.log(`Hay un total de ${totalSuspensos} calificaciones suspensas`);