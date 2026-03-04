import http from 'http'; // Importamos el módulo http para crear un servidor web


const hostname = '127.0.0.1' // Definicion del hostname (dirección IP local) donde se ejecutará el servidor
const port = 3000 // Definimos el puerto en el que el servidor escuchará las solicitudes

// Crear servidor HTTP
const server = http.createServer((req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola Mundo\n');

});

server.listen(port, hostname, () => {

    console.log(`Servidor corriendo en http://${hostname}:${port}/`);

});