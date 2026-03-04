import http from 'http'; // Importamos el módulo http para crear un servidor web

//Crear servidor HTTPbásico
const server = http.createServer((req, res) => {
    res.statusCode = 200; // Establecer el código de estado HTTP a 200 (OK)
    res.setHeader('Content-Type', 'text/plain'); // Establecer el encabezado de tipo de contenido a texto plano
    res.end('! Hola, Mundo http ¡'); // Enviar la respuesta al cliente y finalizar la conexión
});

// Configurar el servidor para que escuche en el puerto 3000
server.listen(3000, '127.0.0.1', () => {
    console.log('Servidor corriendo en http://127.0.0.1:3000/'); // Imprimir un mensaje en la consola indicando que el servidor está corriendo
});