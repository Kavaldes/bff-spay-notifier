require('dotenv').config();
const restConfig = require('./settings/ExpressConfig');
const router = require('./settings/RouterConfig');
const constants = require('./settings/ConstantsConfig');
const logger = require('./settings/LoggerConfig');
const metrics = require('./settings/MetricsConfig');
const swagger = require('./settings/SwaggerConfig');
const app = restConfig.setExpressConfig();

metrics.loadMetrics();

app.use(swagger.path, swagger.serve, swagger.setup);
app.use(router);

app.listen(app.get('port'), () => {
  logger.info(
    `Server started as '${constants.profile}' environment for '${constants.appName}' with version: '${constants.appVersion}' on port ${constants.port}`
  );
});