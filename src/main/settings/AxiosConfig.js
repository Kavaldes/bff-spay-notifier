const axios = require('axios');
const http = require('http');

// Configuración de pool de conexiones
const agent = new http.Agent({
  keepAlive: true,
  // Otras opciones de configuración...
});

// Configuración de Axios con el agente personalizado
const axiosInstance = axios.create({
  timeout: 5000,
  httpAgent: agent, // Configura el agente personalizado
});

module.exports = axiosInstance;