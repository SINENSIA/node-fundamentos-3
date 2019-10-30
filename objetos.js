
const myCoche = new Object({
    color: 'Negro',
    marca: 'Volkswagen',
    modelo: 'Passat',
    arrancar: function() {
      console.log('El coche ha arrancado. Puede iniciar la marcha')
    }
});
// Accedemos a su propiedad
console.log(myCoche.color);
//Ejecutamos un método
myCoche.arrancar();