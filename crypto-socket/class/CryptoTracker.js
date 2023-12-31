const axios = require('axios');

class CryptoTracker {
  constructor() {
    // Configuración de la cartera
    this.cartera = {
      bitcoin: {
        cantidad: 1.5,
        inversion: 5000,
      },
      ethereum: {
        cantidad: 5,
        inversion: 3000,
      },
      // Puedes agregar más criptomonedas según sea necesario
    };
  }

  async obtenerPrecios() {
    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
        params: {
          ids: 'bitcoin,ethereum', // Puedes agregar más criptomonedas separadas por comas
          vs_currencies: 'usd,eur',
        },
      });

      const precios = response.data;
      return this.actualizarCartera(precios);
    } catch (error) {
      console.error('Error al obtener precios:', error.message);
    }
  }

  actualizarCartera(precios) {
    let criptos = [];
    console.log("entro", precios);
    for (const cripto in precios) {
      if (this.cartera[cripto]) {
        const precioActual = precios[cripto].usd;
        const inversionTotal = this.cartera[cripto].cantidad * precioActual;
        const gananciaPerdida = inversionTotal - this.cartera[cripto].inversion;
        console.log(precioActual, inversionTotal, gananciaPerdida);
        criptos.push({
            cripto: cripto,
            actual_price: precioActual,
            inversion_total: inversionTotal.toFixed(2),
            ganancia_perdida: gananciaPerdida.toFixed(2)
        });
      }
    }
    return criptos;
  }

  // Método para iniciar la consulta de precios
  iniciarConsulta() {
    this.obtenerPrecios();
  }
}

module.exports = CryptoTracker;
