const net = require('net');

// Puerto al que el cliente se conectará
const PORT = 3000;

// Dirección IP del servidor (puede ser 'localhost' si está ejecutándose en la misma máquina)
const HOST = '192.168.1.26';

// Crea un nuevo socket para conectarse al servidor
const client = net.createConnection({ port: PORT, host: HOST }, () => {
  client.write('Hola, servidor!');
});

// Evento de datos recibidos desde el servidor
client.on('data', (data) => {
  console.log(`Datos recibidos del servidor: ${data}`);
});

// Evento cuando se cierra la conexión con el servidor
client.on('end', () => {
  console.log('Desconectado del servidor');
});
