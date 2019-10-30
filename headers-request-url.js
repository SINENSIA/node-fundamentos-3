/**  Este sencillo programa obtiene las cabeceras de la solicitud y se las devuelve al cliente en formato json en la respuesta. 
También imprime en console la url y el cuerpo de la solicitud si existiese.*/
const http = require("http");
const server = http.createServer();

server.on("request", (solicitud, respuesta) => {
    let body = [];
    let headerReq = JSON.stringify(solicitud.headers);
    console.log(solicitud.url);

    solicitud.on('data', (chunk) => {
        
        body.push(chunk);
    })
    .on('end', () => {
        
        body = Buffer.concat(body).toString();
        
    }).on('error', (err) => console.log(err)); 
    // set response header
    respuesta.setHeader('content-type', 'application/json');
  
    respuesta.write(headerReq);
     
    respuesta.end();
});
server.listen(8001);