  /**
   * BUCLE FOR
   * Un bucle que se repite un numero conocido de veces.
   * Tiene 3 partes:
   * - inicio: una variable que empieza en numero (normalmente cero)
   * - fin: el valor final que alcanza la variable.
   * - aumento: cuanto aumenta la variable (normalmente de 1 en 1)
   */

  /**
   * Bucle que hace 5 iteraciones (repeticiones)
   * i = 0
   * i = 1
   * i = 2
   * i = 3
   * i = 4
   */
for (let i = 0; i < 5; i++) {
    console.log(i);
}

let nombres = ["Pepe", "Nuria", null, "Jose", "Maite"];

for (let j = 0; j < nombres.length; j++) {
    if(nombres[j] != null){
        console.log(nombres[j]);
    }
}
