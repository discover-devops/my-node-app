const express = require('express');
const pino = require('pino');

const app = express();

const logger = pino({
    level: 'info',
    timestamp: () => `,"time":"${new Date().toISOString()}"`
});

logger.info('hello world');
logger.info('This is log ');
logger.info('Some logging');
logger.info('another line');
logger.info('few more lines');
logger.info('Logging logging all the way');
logger.info('I am done with logging');
logger.info(' bye bye!');

app.listen(3000, function () {
    logger.info("app listening on port 3000!");
});
