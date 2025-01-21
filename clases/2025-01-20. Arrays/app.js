// Ej1 hoja 27
// let productos = ["Laptop", "Mouse",  "Teclado", "Monitor", "Impresora"];
// let precios = [1000, 20, 50, 200, 150];
// let tienda = "Tienda Central";
// let direccion = "Calle Principal 123";

// let nombre = null;      // nulo, no hay nada
// let nombre2 = "null";   // string con contenido palabra null
// let nombre3 = ""        // string con contenido vacío

//             0  1  2  3  4  5  6
// let numeros = [2, 5, 7, 4, 5, 8, 9];
// console.log(numeros);
// console.log(numeros[4]);
// console.log(numeros[9]);

// numeros[1] = 6;
// numeros[4] = null;
// console.log(numeros);

// Ej1 hoja 28
// let tareas = ["Recoger el cuarto", "limpiar el portatil"];
// let nuevaTarea = prompt("Define una nueva tarea");
// tareas[1] = nuevaTarea;
// console.log(tareas);
// let eliminarTarea = prompt(`¿Quieres eliminar la primera tarea?
//     0 - Sí, eliminar la tarea
//     1 - No, no elimines nada`);

// switch (eliminarTarea) {
//     case "0":
//         tareas[0] = null;
//         break;
//     case "1":
//         alert("No has eliminado nada");
//         break;
//     default:
//         alert("ERROR: opción elegida no existe");
//         break;
// }
// alert(`Las tareas pendientes son:
//     ${tareas[0]}
//     ${tareas[1]}
//     `);

// Ej2 hoja 28
let inventario = ["Mesas", "Sillas", "Monitores", "Sofás"];
console.log(inventario);

let accion = prompt(`¿Deseas agregar o eliminar un producto?
    0 - Agregar
    1 - Eliminar`);

let producto;

switch (accion) {
    // Caso de agregar
    case "0":
        let posicionAgregar = prompt(`¿En que posicion deseas sustituir?
            0 - ${inventario[0]}
            1 - ${inventario[1]}
            2 - ${inventario[2]}
            3 - ${inventario[3]}`);
        // Evaluamos que elemento vamos a agregar/sustituir
        switch (posicionAgregar) {
            // Sustituimos/agregamos "Mesas"
            case "0":
                producto = prompt("¿Que producto?");
                inventario[0] = producto;
                break;
            // Sustituimos/agregamos "Sillas"
            case "1":
                producto = prompt("¿Que producto?");
                inventario[1] = producto;
                break;
            // Sustituimos/agregamos "Monitores"
            case "2":
                producto = prompt("¿Que producto?");
                inventario[2] = producto;
                break;
            // Sustituimos/agregamos "Sofás"
            case "3":
                producto = prompt("¿Que producto?");
                inventario[3] = producto;
                break;
            default:
                alert("ERROR: no existe ese producto");
                break;
        }
        break;
    // Caso de eliminar
    case "1":
        // Evaluamos que elemento vamos a eliminar
        let posicionEliminar = prompt(`¿Qué producto deseas eliminar?
            0 - ${inventario[0]}
            1 - ${inventario[1]}
            2 - ${inventario[2]}
            3 - ${inventario[3]}`);
            // Evaluamos que elemento vamos a agregar/sustituir
        switch (posicionEliminar) {
             // Eliminamos "Mesas"
             case "0":
                inventario[0] = null;
                break;
            // Eliminamos "Sillas"
            case "1":
                inventario[1] = null;
                break;
            // Eliminamos "Monitores"
            case "2":
                inventario[2] = null;
                break;
            // Eliminamos "Sofás"
            case "3":
                inventario[3] = null;
                break;
            default:
                alert("ERROR: no existe ese producto");
                break;
        }
        break;
    default:
        alert("ERROR: acción inválida");
        break;
}

console.log(inventario);