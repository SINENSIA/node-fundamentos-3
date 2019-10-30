/** Map es una estructura con clave,valor.
 *  Por ejemplo una receta donde debemos 
 *  almacenar cada ingrediente con su cantidad:
 * */   
let receta = new Map([
    ['huevos', 2],
    ['pimienta', 200],
    ['sal', 20],
    ['trufa', 30]
]);

receta.keys(), // devuelve un iterable con las claves {'huevos'.'pimienta',..}
receta.values(), // devuelve un iterable con los valores {2,200,20,30}
receta.entries() // devuelve un iterable con las entradas {['huevos',2],['pimitenta',200]...}
