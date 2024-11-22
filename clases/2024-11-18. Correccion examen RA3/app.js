/**
 * PARTE I. Lectura de código
 */

// Ej1
let dia = 29;
let mes = "octubre";
console.log("Hoy es " + dia + " de " + mes);

// RESPUESTA: Hoy es 29 de octubre

// Ej2
let esValido = false;
console.log(!esValido);

// RESPUESTA: true

// Ej3
let altura = 180;  let peso = 70;
let esAtleta = true;
console.log((altura >= 170 && peso < 80) || esAtleta);

// RESPUESTA: true

// Ej4

let puntosExamen = 88; let esRegular = true;
console.log((puntosExamen >= 80 && esRegular) || puntosExamen === 100);

// RESPUESTA: true

// Ej5
let distancia = 300; let tiempo = 2;
let velocidad = distancia / tiempo; // 300 / 2 = 150
let dentroLimite = velocidad <= 120; // false
console.log("¿Velocidad dentro del limite? " + dentroLimite);

// RESPUESTA: ¿Velocidad dentro del limite? false

// Ej6
let nombre = "Luis";
let tieneLicencia = false;
let mensaje = "Permiso de conducir para " + nombre + ": " + !tieneLicencia;
// Permiso de conducir para Luis: true
console.log(mensaje);

// RESPUESTA: Permiso de conducir para Luis: true

// Ej7
let numero = 15;
numero += 5; // numero tiene 15 + 5 = 20
// numero = numero + 5;
let enRango = numero >= 10 && numero <= 20; // true
console.log("¿Numero en rango 10-20? " + enRango);

// RESPUESTA: ¿Numero en rango 10-20? true

// Ej8
let alturaMinima = 120;
let alturaUsuario = 130;
let accesoPermitido = alturaUsuario >= alturaMinima; // true
let mensajeAcceso = "¿Altura suficiente para entrar? " + accesoPermitido;
console.log("Altura del usuario: " + alturaUsuario);
console.log(mensajeAcceso);

// RESPUESTA: Altura del usuario: 130
// ¿Altura suficiente para entrar? true

/**
 * PARTE II. Identificacion de errores
 */

// Ej1
let cursoBasicoCompletado = "true";
let experiencia = 5;
let puedeInscribirse  = cursoBasicoCompletado && experiencia >= 5;
console.log("¿Puede inscribirse en el curso avanzado? " + puedeInscribirse);

// RESPUESTA: en linea 1 se usa un true como string y no como boolean

// Ej2
let precioProducto = 80;
let descuento = 20;
let envioGratis = (precioProducto - descuento) > 100 == true;
let precioFinal = precioProducto - descuento + envioGratis;
console.log("¿El precio final incluye envio gratuito? " + envioGratis);
console.log("Precio final con descuento y envio: " + precioFinal);

// RESPUESTA: 
// en linea 3, sobra el  == true puesto que la respuesta ya es un booleano
// En la linea 4 estamos sumando un booleano a un number. No es correcto

// Ej3
let edad = "22";
let suscripcionActiva = false;
let accesoPermitido = edad > 21 && suscripcionActiva == "true";
console.log("¿Tiene acceso al sitio? " + accesoPermitido);

// RESPUESTA: 
// En linea 1 hay un numero como string (no compara correctamente)
// En linea 3 hay un booleano como string (no correcto).

// Ej4
let prueba1 = 85;
let prueba2 = "80";
let enOrden = prueba1 > prueba2 > prueba3; // prueba1 > prueba2 && prueba2 > prueba3
console.log("¿Los puntuajes estan en orden decreciente?" + enOrden);

// RESEPUESTA
// En linea 2 hay un number escrito como un string
// En linea 3 hay dos comparaciones sin operador logico AND

// Ej5
let stock = 5;
let stockMinimo = "10";
let alertaPedido = stock <= stockMinimo || stock = 0; // stock == 0
console.log("¿Es necesario hacer un pedido? " + alertaPedido);

// RESEPUESTA
// En linea 2 tenemos un number como un string
// En linea 3 tenemos una asignacion en stock  en vez de una comparacion

// Ej6
let temperaturaActual = 28;
let temperaturaMinima = 15;
let temperaturaMaxima = "30";
let activarAlarma = temperaturaActual >= temperaturaMaxima && temperaturaActual <= temperaturaMinima;
console.log("¿Se activa la alarma? " + activarAlarma);

// RESPUESTA
// En linea 3 hay un number como string
// En linea 4 el operador logico es incorrecto, debe ser OR (||)


/**
 * PARTE III. Creacion de codigo
 */

// Ej1
let dias = prompt("Introduce los dias"); // actualmente es un string
let dias_number = parseInt(dias);        // actualmente number
let horas = dias_number * 24;
let minutos = horas * 60;
let segundos = minutos * 60;
console.log(dias_number + " dias son " + horas + " horas, " + minutos + " minutos y " + segundos + " segundos");

// Ej2
let litros = prompt("Dame litros por dia");
let litros_number = parseFloat(litros);
let litros_anio = litros_number * 365 ;
console.log("Consume " + litros_anio + " litros en un año");

// Ej3
let precio1 = prompt("Introduce primer precio");
let precio1_number = parseFloat(precio1);
let precio2 = prompt("Introduce segundo precio");
let precio2_number = parseFloat(precio2);
let precio3 = prompt("Introduce tercer precio");
let precio3_number = parseFloat(precio3);
console.log(precio2_number < precio1_number && precio1_number < precio3_number);