import eventEmitter from 'events'; // Importamos el módulo events para crear un emisor de eventos

// Crear un instancia de EventEmitter
const emisor = new eventEmitter();

// Definir un evento personalizado
emisor.on('saludo', (nombre) => {
    console.log(`!Hola, ${nombre}¡`);
});

// Emitir el evento 'Saludo'
emisor.emit('saludo', 'Mundo');