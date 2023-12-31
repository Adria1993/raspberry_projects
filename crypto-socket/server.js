const net = require('net');
const CryptoTracker = require('./class/CryptoTracker');

const server = net.createServer((socket) => {
  const cpto_tck = new CryptoTracker();

  // Evento de datos recibidos desde el cliente
  socket.on('data', async (data) => {
    const message = data.toString().trim();
    switch(message){
      case 'init':
        let crptos = await cpto_tck.obtenerPrecios();
        let detailed = {case: message, crypto: crptos};
        socket.write(JSON.stringify(detailed));
      break;
      default:
        socket.write("NO ES CORRECTO");
      break;
    }
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
