const fs = require('fs');

fs.appendFile('./big-file.data', 'No hay más líneas', function (err) {
  if (err) throw err;
  console.log('Modificado!');
});


// fs.appendFileSync('./big-file.data', 'datos a añadir'); // Versión síncrona