const events = require('events');

const myEventEmitter = new events.EventEmitter();

function e1() {
    console.log("¡El evento abrir ha tenido lugar!");  
}  

function e2() {
    console.log('¡El evento cerrar ha tenido lugar!')
}

myEventEmitter.on('open', e1); // Registramos el primer evento
myEventEmitter.on('open', (code, msg)=>  { console.log(`Código ${code}, ${msg}`) }); // Registramos el primer evento

myEventEmitter.on('eventoDos', e2); // Registramos el segundo*/

myEventEmitter.emit('open', 200, 'Observa que os dos bind en open se ejecutan');
myEventEmitter.emit('eventoDos');

