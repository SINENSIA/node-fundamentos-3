// Módulo 3 - Programando con el bule de eventos
// Ejemplo de cómo podemos obtener resultados inesperados si no comprendemos el uso de funciones 
// bloqueantes y no bloqueantes

let s = new Date().getTime();

setTimeout(function() {
    console.log("Han pasado " + (new Date().getTime() - s) + " milisegundos");
}, 500);

while(true) {
    if (new Date().getTime() -s >= 1000) {
        console.log("Esto es un bucle while, he estado en bucle durante 1 segundo");
        break;
    }
}