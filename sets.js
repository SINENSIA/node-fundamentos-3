let set = new Set();

let huevos = { nombre: "huevos", cantidad: 2 };
let pimienta = { nombre: "Pimienta", cantidad: 200 };
let sal = { nombre: "Sal", cantidad: 25 };

// intentamos meter más de una vez el ingrediente
set.add(huevos);
set.add(pimienta);
set.add(sal);
set.add(huevos);

// Sólo hay 3, son valores únicos
console.log( set.size ); // 3

for (let ingrediente of set) {
  console.log(ingrediente.nombre); 
}
