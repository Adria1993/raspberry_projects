const net = require('net');

const server = net.createServer((socket) => {
  console.log('Cliente conectado');

  // Evento de datos recibidos desde el cliente
  socket.on('data', (data) => {
    console.log(`Datos recibidos del cliente: ${data}`);
    // Puedes responder al cliente aquí si es necesario
  });

  // Evento cuando se cierra la conexión con el cliente
  socket.on('end', () => {
    console.log('Cliente desconectado');
  });
});

// Puerto en el que el servidor escuchará las conexiones
const PORT = 3000;

// Inicia el servidor y lo pone a la escucha en el puerto especificado
server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
