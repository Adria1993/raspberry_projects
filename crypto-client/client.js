const net = require('net');

class Cliente {
  constructor() {
    // Puerto al que el cliente se conectará
    this.PORT = 3000;

    // Dirección IP del servidor (puede ser 'localhost' si está ejecutándose en la misma máquina)
    this.HOST = '192.168.1.26';


    // Crea un nuevo socket para conectarse al servidor
    this.client = net.createConnection({ port: this.PORT, host: this.HOST }, () => {
      console.log('Conectado al servidor');
    });

    // Evento de datos recibidos desde el servidor
    this.client.on('data', this.handleServerData);

    // Evento cuando se cierra la conexión con el servidor
    this.client.on('end', () => {
      console.log('Desconectado del servidor');
    });
  }

  // Método para manejar los datos recibidos del servidor
  handleServerData(data) {
    console.log(`Datos recibidos del servidor: ${data}`);
    // Puedes agregar tu lógica aquí para manejar los datos recibidos
  }

  // Método para enviar datos al servidor
  sendToServer(message) {
    this.client.write(message);
  }
}

// Crear una instancia de la clase Cliente
const cliente = new Cliente();

// Ejemplo de cómo enviar datos desde la instancia del cliente
cliente.sendToServer('Hola, servidor!');
