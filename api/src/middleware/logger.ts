import koaLogger from 'koa-pino-logger';
import { Middleware } from 'koa';

export const getLoggerMiddleware = (): Middleware => {
  const logLevel = process.env.LOG_LEVEL ?? 'debug';
  const logType = process.env.LOG_TYPE ?? 'pretty';

  return koaLogger({
    name: 'ts-exercise',
    level: logLevel,
    transport: {
      target: logType === 'pretty' ? 'pino-pretty' : 'pino/file',
    },
    redact: [
      'req.headers.cookie',
      'req.headers.password',
      'req.headers.passport',
      'req.headers.token',
      'req.headers.authorization',
      'err.config.auth.password',
      'err.request.body.client_secret',
      'err.config.headers.Authorization',
    ],
  });
};
