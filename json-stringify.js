let miObjeto =  { 
    'nombre': 'coche',
    'color': 'negro',
    'marca': 'volkswagen',
    'modelo': 'passat',
    'potencia': 218    
}
let miObjetoStr = JSON.stringify(miObjeto);
let miObjetoJSON = JSON.parse(miObjetoStr);
console.log(typeof miObjeto, miObjeto);
console.log(typeof miObjetoStr, miObjetoStr);
console.log(typeof miObjetoJSON, miObjetoJSON);

// JSON.stringify puede usarse en arrays
let myArray = ['camión','coche','tractor','moto'];
console.log(myArray);
let myArrayStr = JSON.stringify(myArray);
console.log(myArrayStr);
// Y por tanto lo podemos pasar a JSON.parse
let myArrayJSON = JSON.parse(myArrayStr);
console.log(myArrayJSON);

//JSON.parse admite un callback que se ejecutará con cada elemento

myArrayJSON = JSON.parse(myArrayStr, (key, value) => {
    if (typeof value === 'string') {
      return value.toUpperCase();
    }
    return value;
  });
console.log(myArrayJSON);

function replacer(key, value) {
    
    if (key === 'color') {
      return value +  ' metalizado';
    }
    return value;
  }
miObjetoStr = JSON.stringify(miObjeto, replacer, "...");

console.log(miObjetoStr);



