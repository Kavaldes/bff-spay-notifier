const express = require('express');
const metricsRouter = require('../api/metrics/metricsRouter')

const router = express.Router();

router.use(metricsRouter);

module.exports = router;
