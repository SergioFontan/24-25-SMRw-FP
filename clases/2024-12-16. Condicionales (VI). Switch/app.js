/**
 * Crea un programa que pida al usuario una nota.
 * Esa nota debe ser entera (sin decimales).
 * Comprueba su calificacion y si esta aprobada haz un alert con un mensaje con su calificacion correspondiente.
 * 5 --> aprobado
 * 6 --> bien
 * 7 --> notable bajo
 * 8 --> notable alto
 * 9 --> sobresaliente bajo
 * 10 --> sobresaliente alto
 */

let numero = parseInt(prompt("Dame una nota"));

switch (numero) {
    case 5:
        alert("Aprobado");
        break;
    case 6:
        alert("bien")
        break;
    case 7:
        alert("notable bajo")
        break;
    case 8:
        alert("notable alto")
        break;
    case 9:
        alert("sobresaliente bajo");
        break;
    case 10:
        alert("sobresaliente alto");
        break;
    default:
        if(numero >= 0 && numero < 5){
            alert("Suspenso");
        }else{
            alert("NO NOS VALE ESTE NUMERO");
        }
        
        break;
}