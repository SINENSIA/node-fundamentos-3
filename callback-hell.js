function miOperacion(callback) {
    setTimeout(function() {
        console.log("1- Primer callback obtener un número aleatorio. Tarda 3 segundos");
        let result = Math.random();
        return callback(result);
        
    }, 300);
}
function doble(numero,callback) {
    setTimeout(function() {
        console.log("2- Segundo callback obtener el doble del número aleatorio.");
        let result = numero * numero;
        return callback(result);
    }, 300);

}
function triple(numero,callback) {
    console.log("3- Tercer callback obtener el triple del doble del número aleatorio.");
    let result = (numero * numero * numero);
    return callback(result);

}
function mitad(numero,callback) {
    console.log("4- Cuarto callback obtener la mmitad del triple del doble del número aleatorio.");
    let result = (numero/2);
    return callback(result);

}
function raizCuadrada(numero, callback) {
    console.log("5- Quinto callback obtener la raíz cuadrada de la mitad del triple del doble del número aleatorio.");
    let result = (Math.sqrt(numero));
    return callback(result);

}
// Callback hell
miOperacion(function(numeroRandom) {
    doble(numeroRandom, function(numeroRandomDoble) {
        triple(numeroRandomDoble, function(numeroRandomTriple) {
            mitad(numeroRandomTriple, function(mitadNumero) {
                raizCuadrada(mitadNumero, function(raiz) { console.log("La raiz cuadrada es: " + raiz)});
            });
        });
    });
});





