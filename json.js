// Es un objeto
/*let obj = {"key":"value"};
// Convertir en una cade na de texto
let json2string =  JSON.stringify(obj);
// Desde una cadena de texto...(debemos usar doble comilla)
let string = "{\"key\":\"value\"}"; // o '{"key":"value"}'
// A un objeto JSON
let obj2 = JSON.parse(string);
// Accedemos a sus propiedades 
console.log(obj2.key);
console.log(obj, obj2);*/

let miObjeto =  { 
                    "name": "coche",
                    "color": "negro",
                    "arrancar": function() { 
                        console.log("Arrancando...")
                    } // Esto no se puede representar en JSON
                    
                }

let miObjetoJSON = JSON.stringify(miObjeto);
console.log("\n" + miObjetoJSON  + "\n"); // stringify ignorará "arrancar"