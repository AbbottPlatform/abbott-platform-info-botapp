
module.exports = function (webserver, router) {
  const logger = require('@abbott-platform/abbott-framework/lib/logging')('abbott-platform-info-app:health_check');
  let server = webserver.server;

  // GAE Flexible instance requisites
  server.set('trust proxy', true);
  server.use('/_ah/health', require('express-healthcheck')());
  server.use('/healthz', require('express-healthcheck')());

  router.get('/info', (req, res) => {
    res.send({
      'environment': process.env.ENVIRONMENT,
      'version': process.env.ABBOTT_APP_VERSION
    });
  });

  logger.debug('route loaded!');
};
