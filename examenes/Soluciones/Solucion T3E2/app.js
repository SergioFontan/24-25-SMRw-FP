let calificaciones = [3, 12, 7, 2, 1, -9, 17, 5, 16, 2, 21, 10, 9, 5, 2, 6];

let validos = 0;
let aprobados = 0;

const MENSAJE_APROBADOS = "Calificaciones aprobadas: ";
const MENSAJE_VALIDOS = "Calificaciones válidas: ";

for(let i = 0; i < calificaciones.length; i++){
    if(calificaciones[i] <= 10 && calificaciones > 0){
        validos++;
        if(calificaciones[i] >= 5){
            aprobados++;
        }
    }
}

alert(MENSAJE_APROBADOS + aprobados);
alert(MENSAJE_VALIDOS + validos)