let ciudades = ["Toledo", "Madrid", "Segovia", "Avila", 
    "Salamanca", "León", "Burgos"];

const MENSAJE_ENCONTRADO = "Se ha encontrado la ciudad en la posición ";
const MENSAJE_NO_ENCONTRADO = "No se ha encontrado la ciudad";
let encontrado = false;
let i = 0;

let ciudad = prompt("Inserta una ciudad");

while(encontrado == false && i < ciudades.length){
    if(ciudad == ciudades[i]){
        encontrado = true;
    }
    i++;
}

if(encontrado == true){
    alert(MENSAJE_ENCONTRADO + i);
}else{
    alert(MENSAJE_NO_ENCONTRADO);
}