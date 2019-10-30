/** Hay dos formas de crear un array
 * con [] o con new Array */

let miArray = new Array("Cero","Uno","Dos","Tres");
let tuArray = ["Cero","Uno","Dos","Tres"];

console.log(miArray[2]); //imprime el tercer elemento (los array empiezan por 0)
miArray.push("Seis"); //Inserta un elemento al final
let last = miArray.pop(); //Saca el último elemento del array y lo almacena en la variable
let first = miArray.shift(); // Como pop pero saca el primer elemento
miArray.unshift("000"); // Como push pero lo añade al principio
let nuevoArray = miArray.slice(1,3); // Como pop pero extrae un array sin quitarlo del original

console.log(last, nuevoArray);
console.log(miArray);