
const fs = require("fs");

const server = require("http").createServer();

server.on("request", (req, res) => {
  
    const src = fs.createReadStream("./big-file.data")
    .on('data', (chunk) => {console.log(`Recibidos ${chunk.length} bytes de datos.`); })
    .on('open', function(message) { console.log(`El archivo ha sido abierto: ${message}`)})
    .on('close', () => console.log(`La fuente se ha cerrado`))
    .on('end',  () => console.log(`La operación ha terminado - end`))
    .on('finish', () => console.log(`La operación ha terminado - finish`))
    .on('error', (err) => console.log(`Ha ocurrido el error: ${err}`))
    .on('pause', () => console.log(`La lectura ha sido pausada`))
    .on('resume', () => console.log(`La lectura se ha reanudado`))
    

    const outStream = new Writable({
        write(chunk, encoding, callback) {
          res.end(chunk.toString());
          callback();
        }
      });
  



});

server.listen(8001);