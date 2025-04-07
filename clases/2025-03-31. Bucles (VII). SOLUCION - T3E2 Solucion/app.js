let calificaciones = [3,2,7,2,1,9,7,5,6,2,2,10,9,5,2,6];

// Creación de variables AUXILIARES
let totalSuspensos = 0;
let totalAprobados = 0;

// Realizar el bucle con la tarea
for(let i = 0; i < calificaciones.length; i++ ){
    // Compruebo si es suspenso para sumar a totalSuspensos
    if(calificaciones[i] < 5){
        totalSuspensos++;
    }else{
        totalAprobados++;
        if(totalAprobados <= 3){
            console.log(`Calificacion aprobada numero ${totalAprobados} es un ${calificaciones[i]}`);
        }
    }
}
console.log(`Hay un total de ${totalSuspensos} calificaciones suspensas`);