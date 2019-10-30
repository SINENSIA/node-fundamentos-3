let destinatario = { nombre: "SINENSIA", presente: true}

// La función entregaPaquete devuelve una promesa
function entregaPaquete(destinatario) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            if (destinatario.presente) {
                resolve("El paquete ha sido entregado");
            } else {
                reject(new Error("El destinatario estaba ausente"));
            }
        },3000);
    });
}

function addToDatabase(destinatario) {
    
    return new Promise(function(resolve, reject) {
        let worked = true;
        /* Como tardan un poco, lo simulamos de nuevo con un setTimeout */
        setTimeout(() => {
            if (worked) {
                resolve("El destinatario " + destinatario.nombre + " y su entrega han sido añadidos a la base de datos");
            } else {
                reject(new Error ("Ha habido un error al guardar los datos"));
            }
        }, 2000);
     });
}
function sendEmail(destinatario) {
    let worked = true;
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            if (worked) {
                resolve("...enviando email a " + destinatario.nombre);
            } else {
                reject(new Error("No se ha podido enviar el email"));
            }
        }, 2000);
    });
}

entregaPaquete(destinatario)
    .then((result) => { console.log("Result primer then: " +  result); return addToDatabase(destinatario) })
    .then((result) => { console.log("Result segundo then: " + result); return sendEmail(destinatario) })
    .then((result) =>   console.log("Result último then: " +  result))
    .catch((err) => console.log("Catch: " + err))


