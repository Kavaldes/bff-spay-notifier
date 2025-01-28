const express = require('express');
const router = express.Router();
const MetricsHandler = require('./handler/metricsHandler');

const endpoint = '/metrics';

/**
 * @swagger
 * /metrics:
 *   get:
 *     summary: Obtiene las métricas del sistema
 *     tags: [Métricas]
 *     responses:
 *       200:
 *         description: Respuesta exitosa con las métricas
 *         content:
 *           text/plain:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                   example:
 *                     cpuUsage: 20
 *                     memoryUsage: 50
 *       500:
 *         description: Error interno del servidor
 */
router.get(endpoint, express.json(), async (req, res) => {
  await MetricsHandler.metrics(req, res);
});

module.exports = router;
