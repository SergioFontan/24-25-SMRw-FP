/**
 * NOTA: funcional para PORTEROS y DEFENSAS
 * No funcional para mediocampistas y delanteros
 */

// Definicion de arrays de tipo de jugador
let porteros = [null, "Raul"];
let defensas = [null, "Pilar", null];
let mediocampistas = [null, "Angela", "J. Polo", null];
let delanteros = [null, "Sergio"];

// Creacion de variables auxiliares
let operacion;
let tipo;
let posicion;
let nombre;

// Mostramos estado antes de la operacion
alert(`El equipo actual consta de:
    PORTEROS
    ${porteros[0]}
    ${porteros[1]}
    
    DEFENSAS
    ${defensas[0]}
    ${defensas[1]}
    ${defensas[2]}

    MEDIOCAMPISTAS
    ${mediocampistas[0]}
    ${mediocampistas[1]}
    ${mediocampistas[2]}
    ${mediocampistas[3]}
    
    DELANTEROS
    ${delanteros[0]}
    ${delanteros[1]}
    `);

tipo = prompt(`Elige el tipo de jugador que deseas insertar:
    0 - PORTERO
    1 - DEFENSA
    2 - MEDIOCAMPISTA
    3 - DELANTERO`);

// Evaluo el tipo de jugador
switch (tipo) {
    // Caso de PORTERO
    case "0":
        // Solicito al usuario que operacion quiere realizar
        operacion = prompt(`Elige la operacion a seguir con el portero
            0 - INSERTAR o ACTUALIZAR
            1 - ELIMINAR`);

        // Evaluo la decision del usuario
        switch (operacion) {
            case "0":
                posicion = prompt(`Indica la posicion en la que deseas introducir el jugador
                    0 - ${porteros[0]}
                    1 - ${porteros[1]}`);

                // Evaluo la posicion a introducir el jugador
                if (posicion == "0" || posicion == "1") {
                    // Evaluo si existe ya un jugador 
                    if (porteros[posicion] != null) {
                        alert("ERROR: posicion ya ocupada");
                    }
                    else {
                        nombre = prompt("Introduce el nombre del jugador");

                        // Compruebo si el usuario ha escrito algo
                        if (nombre.length > 0) {
                            porteros[posicion] = nombre;
                        } else {
                            alert(`ERROR: el nombre para el portero está vacío`);
                        }
                    }

                } else {
                    alert(`ERROR: posicion de portero no existente`);
                }

                // SOLUCION MENOS BUENA PERO VALIDA
                // switch (posicion) {
                //     case "0":
                //         nombre = prompt("Introduce el nombre del jugador");

                //         // Compruebo si el usuario ha escrito algo
                //         if(nombre.length > 0){
                //             porteros[posicion] = nombre;
                //         }else{
                //             alert(`ERROR: el nombre para el portero está vacío`);
                //         }
                //         break;

                //     case "1":
                //         nombre = prompt("Introduce el nombre del jugador");

                //         // Compruebo si el usuario ha escrito algo
                //         if(nombre.length > 0){
                //             porteros[posicion] = nombre;
                //         }else{
                //             alert(`ERROR: el nombre para el portero está vacío`);
                //         }
                //         break;

                //     default:
                //         alert(`ERROR: posicion de portero no existente`);
                //         break;
                // }

                break;
            case "1":
                posicion = prompt(`Indica la posicion en la que deseas eliminar el jugador
                    0 - ${porteros[0]}
                    1 - ${porteros[1]}`);

                // Evaluo la posicion a eliminar el jugador
                if (posicion == "0" || posicion == "1") {
                    // Evaluo si existe ya un jugador 
                    if (porteros[posicion] != null) {
                        porteros[posicion] = null;
                    } else {
                        alert("ERROR: posicion ya vacía");
                    }
                } else {
                    alert(`ERROR: posicion de portero no existente`);
                }
                break;
            default:
                alert("ERROR: operacion elegida no disponible");
                break;
        }

        console.log(porteros);
        break;
    // Caso de DEFENSA
    case "1":
        // Solicito al usuario que operacion quiere realizar
        operacion = prompt(`Elige la operacion a seguir con el portero
        0 - INSERTAR o ACTUALIZAR
        1 - ELIMINAR`);

        // Evaluo la decision del usuario
        switch (operacion) {
            case "0":
                posicion = prompt(`Indica la posicion en la que deseas introducir el jugador
            0 - ${defensas[0]}
            1 - ${defensas[1]}
            2 - ${defensas[2]}`);

                // Evaluo la posicion a introducir el jugador
                if (posicion >= 0 && posicion <=2) {
                    // Evaluo si existe ya un jugador 
                    if (defensas[posicion] != null) {
                        alert("ERROR: posicion ya ocupada");
                    }
                    else {
                        nombre = prompt("Introduce el nombre del jugador");

                        // Compruebo si el usuario ha escrito algo
                        if (nombre.length > 0) {
                            defensas[posicion] = nombre;
                        } else {
                            alert(`ERROR: el nombre para el portero está vacío`);
                        }
                    }

                } else {
                    alert(`ERROR: posicion de portero no existente`);
                }

                break;
            case "1":
                posicion = prompt(`Indica la posicion en la que deseas eliminar el jugador
            0 - ${defensas[0]}
            1 - ${defensas[1]}
            2 - ${defensas[2]}`);

                // Evaluo la posicion a eliminar el jugador
                if (posicion >= 0 && posicion <=2) {
                    // Evaluo si existe ya un jugador 
                    if (defensas[posicion] != null) {
                        defensas[posicion] = null;
                    } else {
                        alert("ERROR: posicion ya vacía");
                    }
                } else {
                    alert(`ERROR: posicion de portero no existente`);
                }
                break;
            default:
                alert("ERROR: operacion elegida no disponible");
                break;
        }
        break;
    // Caso de MEDIOCAMPISTA
    case "2":
        // Solicito al usuario que operacion quiere realizar
        operacion = prompt(`Elige la operacion a seguir con el portero
            0 - INSERTAR o ACTUALIZAR
            1 - ELIMINAR`);


        posicion = prompt(`Indica la posicion en la que deseas introducir el jugador
            0 - ${mediocampistas[0]}
            1 - ${mediocampistas[1]}
            2 - ${mediocampistas[2]}
            3 - ${mediocampistas[3]}`);

        // Evaluo la posicion a introducir el jugador
        if (posicion >= 0 && posicion <= 2) {
            // Evaluo si existe ya un jugador 
            if (mediocampistas[posicion] != null) {
                alert("ERROR: posicion ya ocupada");
            }
            else {
                nombre = prompt("Introduce el nombre del jugador");

                // Compruebo si el usuario ha escrito algo
                if (nombre.length > 0) {
                    mediocampistas[posicion] = nombre;
                } else {
                    alert(`ERROR: el nombre para el mediocampista está vacío`);
                }
            }

        } else {
            alert(`ERROR: posicion de mediocampista no existente`);
        }


        break;
    // Caso de DELANTERO
    case "3":
        // Solicito al usuario que operacion quiere realizar
        operacion = prompt(`Elige la operacion a seguir con el portero
            0 - INSERTAR o ACTUALIZAR
            1 - ELIMINAR`);


        posicion = prompt(`Indica la posicion en la que deseas introducir el jugador
            0 - ${delanteros[0]}
            1 - ${delanteros[1]}`);

        // Evaluo la posicion a introducir el jugador
        if (posicion == "0" || posicion == "1") {
            // Evaluo si existe ya un jugador 
            if (delanteros[posicion] != null) {
                alert("ERROR: posicion ya ocupada");
            }
            else {
                nombre = prompt("Introduce el nombre del jugador");

                // Compruebo si el usuario ha escrito algo
                if (nombre.length > 0) {
                    delanteros[posicion] = nombre;
                } else {
                    alert(`ERROR: el nombre para el delantero está vacío`);
                }
            }

        } else {
            alert(`ERROR: posicion de delantero no existente`);
        }
        break;
    // Cualquier otro es un ERROR
    default:
        alert(`ERROR: tipo no existente`);
        break;
}

// Mostramos estado despues de la operacion
alert(`El equipo actual consta de:
    PORTEROS
    ${porteros[0]}
    ${porteros[1]}
    
    DEFENSAS
    ${defensas[0]}
    ${defensas[1]}
    ${defensas[2]}

    MEDIOCAMPISTAS
    ${mediocampistas[0]}
    ${mediocampistas[1]}
    ${mediocampistas[2]}
    ${mediocampistas[3]}
    
    DELANTEROS
    ${delanteros[0]}
    ${delanteros[1]}
`);
