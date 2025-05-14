let precio;
let correcto = false;

const MINIMO = 0.01;
const MAXIMO = 10000;
const ERROR_RANGO = "ERROR: rango incorrecto";
const ERRRO_TIPO = "ERROR: no se ha introducido un precio";

while(correcto == false){
    precio = prompt("Introduce un precio");
    console.log(isNaN(precio));
    if(isNaN(precio) != true){
        precio = parseFloat(precio);
        if(precio < MAXIMO && precio >= MINIMO){
            correcto = true;
        }else{
            alert(ERROR_RANGO);
        }
    }
    else{
        alert(ERRRO_TIPO);
    }
}